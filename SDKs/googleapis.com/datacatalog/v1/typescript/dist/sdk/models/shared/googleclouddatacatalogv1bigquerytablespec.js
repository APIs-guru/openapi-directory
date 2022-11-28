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
import { GoogleCloudDatacatalogV1TableSpec } from "./googleclouddatacatalogv1tablespec";
import { GoogleCloudDatacatalogV1ViewSpec } from "./googleclouddatacatalogv1viewspec";
export var GoogleCloudDatacatalogV1BigQueryTableSpecTableSourceTypeEnum;
(function (GoogleCloudDatacatalogV1BigQueryTableSpecTableSourceTypeEnum) {
    GoogleCloudDatacatalogV1BigQueryTableSpecTableSourceTypeEnum["TableSourceTypeUnspecified"] = "TABLE_SOURCE_TYPE_UNSPECIFIED";
    GoogleCloudDatacatalogV1BigQueryTableSpecTableSourceTypeEnum["BigqueryView"] = "BIGQUERY_VIEW";
    GoogleCloudDatacatalogV1BigQueryTableSpecTableSourceTypeEnum["BigqueryTable"] = "BIGQUERY_TABLE";
    GoogleCloudDatacatalogV1BigQueryTableSpecTableSourceTypeEnum["BigqueryMaterializedView"] = "BIGQUERY_MATERIALIZED_VIEW";
})(GoogleCloudDatacatalogV1BigQueryTableSpecTableSourceTypeEnum || (GoogleCloudDatacatalogV1BigQueryTableSpecTableSourceTypeEnum = {}));
// GoogleCloudDatacatalogV1BigQueryTableSpec
/**
 * Describes a BigQuery table.
**/
var GoogleCloudDatacatalogV1BigQueryTableSpec = /** @class */ (function (_super) {
    __extends(GoogleCloudDatacatalogV1BigQueryTableSpec, _super);
    function GoogleCloudDatacatalogV1BigQueryTableSpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tableSourceType" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1BigQueryTableSpec.prototype, "tableSourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tableSpec" }),
        __metadata("design:type", GoogleCloudDatacatalogV1TableSpec)
    ], GoogleCloudDatacatalogV1BigQueryTableSpec.prototype, "tableSpec", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=viewSpec" }),
        __metadata("design:type", GoogleCloudDatacatalogV1ViewSpec)
    ], GoogleCloudDatacatalogV1BigQueryTableSpec.prototype, "viewSpec", void 0);
    return GoogleCloudDatacatalogV1BigQueryTableSpec;
}(SpeakeasyBase));
export { GoogleCloudDatacatalogV1BigQueryTableSpec };
