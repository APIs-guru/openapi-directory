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
export var GoogleCloudDatacatalogV1DataplexExternalTableSystemEnum;
(function (GoogleCloudDatacatalogV1DataplexExternalTableSystemEnum) {
    GoogleCloudDatacatalogV1DataplexExternalTableSystemEnum["IntegratedSystemUnspecified"] = "INTEGRATED_SYSTEM_UNSPECIFIED";
    GoogleCloudDatacatalogV1DataplexExternalTableSystemEnum["Bigquery"] = "BIGQUERY";
    GoogleCloudDatacatalogV1DataplexExternalTableSystemEnum["CloudPubsub"] = "CLOUD_PUBSUB";
    GoogleCloudDatacatalogV1DataplexExternalTableSystemEnum["DataprocMetastore"] = "DATAPROC_METASTORE";
    GoogleCloudDatacatalogV1DataplexExternalTableSystemEnum["Dataplex"] = "DATAPLEX";
})(GoogleCloudDatacatalogV1DataplexExternalTableSystemEnum || (GoogleCloudDatacatalogV1DataplexExternalTableSystemEnum = {}));
// GoogleCloudDatacatalogV1DataplexExternalTable
/**
 * External table registered by Dataplex. Dataplex publishes data discovered from an asset into multiple other systems (BigQuery, DPMS) in form of tables. We call them "external tables". External tables are also synced into the Data Catalog. This message contains pointers to those external tables (fully qualified name, resource name et cetera) within the Data Catalog.
**/
var GoogleCloudDatacatalogV1DataplexExternalTable = /** @class */ (function (_super) {
    __extends(GoogleCloudDatacatalogV1DataplexExternalTable, _super);
    function GoogleCloudDatacatalogV1DataplexExternalTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataCatalogEntry" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1DataplexExternalTable.prototype, "dataCatalogEntry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fullyQualifiedName" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1DataplexExternalTable.prototype, "fullyQualifiedName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=googleCloudResource" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1DataplexExternalTable.prototype, "googleCloudResource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=system" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1DataplexExternalTable.prototype, "system", void 0);
    return GoogleCloudDatacatalogV1DataplexExternalTable;
}(SpeakeasyBase));
export { GoogleCloudDatacatalogV1DataplexExternalTable };
