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
import { GoogleCloudDatacatalogV1SystemTimestampsInput } from "./googleclouddatacatalogv1systemtimestamps";
import { GoogleCloudDatacatalogV1SystemTimestamps } from "./googleclouddatacatalogv1systemtimestamps";
// GoogleCloudDatacatalogV1EntryGroupInput
/**
 * Entry group metadata. An `EntryGroup` resource represents a logical grouping of zero or more Data Catalog Entry resources.
**/
var GoogleCloudDatacatalogV1EntryGroupInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDatacatalogV1EntryGroupInput, _super);
    function GoogleCloudDatacatalogV1EntryGroupInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataCatalogTimestamps" }),
        __metadata("design:type", GoogleCloudDatacatalogV1SystemTimestampsInput)
    ], GoogleCloudDatacatalogV1EntryGroupInput.prototype, "dataCatalogTimestamps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1EntryGroupInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1EntryGroupInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1EntryGroupInput.prototype, "name", void 0);
    return GoogleCloudDatacatalogV1EntryGroupInput;
}(SpeakeasyBase));
export { GoogleCloudDatacatalogV1EntryGroupInput };
// GoogleCloudDatacatalogV1EntryGroup
/**
 * Entry group metadata. An `EntryGroup` resource represents a logical grouping of zero or more Data Catalog Entry resources.
**/
var GoogleCloudDatacatalogV1EntryGroup = /** @class */ (function (_super) {
    __extends(GoogleCloudDatacatalogV1EntryGroup, _super);
    function GoogleCloudDatacatalogV1EntryGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataCatalogTimestamps" }),
        __metadata("design:type", GoogleCloudDatacatalogV1SystemTimestamps)
    ], GoogleCloudDatacatalogV1EntryGroup.prototype, "dataCatalogTimestamps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1EntryGroup.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1EntryGroup.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDatacatalogV1EntryGroup.prototype, "name", void 0);
    return GoogleCloudDatacatalogV1EntryGroup;
}(SpeakeasyBase));
export { GoogleCloudDatacatalogV1EntryGroup };
