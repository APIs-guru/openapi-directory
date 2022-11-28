var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1BigQueryRoutineSpec } from "./googleclouddatacatalogv1bigqueryroutinespec";
import { GoogleCloudDatacatalogV1RoutineSpecArgument } from "./googleclouddatacatalogv1routinespecargument";
export var GoogleCloudDatacatalogV1RoutineSpecRoutineTypeEnum;
(function (GoogleCloudDatacatalogV1RoutineSpecRoutineTypeEnum) {
    GoogleCloudDatacatalogV1RoutineSpecRoutineTypeEnum["RoutineTypeUnspecified"] = "ROUTINE_TYPE_UNSPECIFIED";
    GoogleCloudDatacatalogV1RoutineSpecRoutineTypeEnum["ScalarFunction"] = "SCALAR_FUNCTION";
    GoogleCloudDatacatalogV1RoutineSpecRoutineTypeEnum["Procedure"] = "PROCEDURE";
})(GoogleCloudDatacatalogV1RoutineSpecRoutineTypeEnum || (GoogleCloudDatacatalogV1RoutineSpecRoutineTypeEnum = {}));
// GoogleCloudDatacatalogV1RoutineSpec
/**
 * Specification that applies to a routine. Valid only for entries with the `ROUTINE` type.
**/
var GoogleCloudDatacatalogV1RoutineSpec = /** @class */ (function (_super) {
    __extends(GoogleCloudDatacatalogV1RoutineSpec, _super);
    function GoogleCloudDatacatalogV1RoutineSpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bigqueryRoutineSpec" }),
        __metadata("design:type", GoogleCloudDatacatalogV1BigQueryRoutineSpec)
    ], GoogleCloudDatacatalogV1RoutineSpec.prototype, "bigqueryRoutineSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=definitionBody" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1RoutineSpec.prototype, "definitionBody", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1RoutineSpec.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnType" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1RoutineSpec.prototype, "returnType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routineArguments", elemType: GoogleCloudDatacatalogV1RoutineSpecArgument }),
        __metadata("design:type", Array)
    ], GoogleCloudDatacatalogV1RoutineSpec.prototype, "routineArguments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routineType" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1RoutineSpec.prototype, "routineType", void 0);
    return GoogleCloudDatacatalogV1RoutineSpec;
}(SpeakeasyBase));
export { GoogleCloudDatacatalogV1RoutineSpec };
