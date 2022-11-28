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
import { GoogleCloudDocumentaiV1DocumentSchemaEntityTypeEnumValues } from "./googleclouddocumentaiv1documentschemaentitytypeenumvalues";
import { GoogleCloudDocumentaiV1DocumentSchemaEntityTypeProperty } from "./googleclouddocumentaiv1documentschemaentitytypeproperty";
// GoogleCloudDocumentaiV1DocumentSchemaEntityType
/**
 * EntityType is the wrapper of a label of the corresponding model with detailed attributes and limitations for entity-based processors. Multiple types can also compose a dependency tree to represent nested types.
**/
var GoogleCloudDocumentaiV1DocumentSchemaEntityType = /** @class */ (function (_super) {
    __extends(GoogleCloudDocumentaiV1DocumentSchemaEntityType, _super);
    function GoogleCloudDocumentaiV1DocumentSchemaEntityType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=baseTypes" }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1DocumentSchemaEntityType.prototype, "baseTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1DocumentSchemaEntityType.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enumValues" }),
        __metadata("design:type", GoogleCloudDocumentaiV1DocumentSchemaEntityTypeEnumValues)
    ], GoogleCloudDocumentaiV1DocumentSchemaEntityType.prototype, "enumValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDocumentaiV1DocumentSchemaEntityType.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties", elemType: GoogleCloudDocumentaiV1DocumentSchemaEntityTypeProperty }),
        __metadata("design:type", Array)
    ], GoogleCloudDocumentaiV1DocumentSchemaEntityType.prototype, "properties", void 0);
    return GoogleCloudDocumentaiV1DocumentSchemaEntityType;
}(SpeakeasyBase));
export { GoogleCloudDocumentaiV1DocumentSchemaEntityType };
