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
import { GSuitePrincipal } from "./gsuiteprincipal";
// DataSource
/**
 * Datasource is a logical namespace for items to be indexed. All items must belong to a datasource. This is the prerequisite before items can be indexed into Cloud Search.
**/
var DataSource = /** @class */ (function (_super) {
    __extends(DataSource, _super);
    function DataSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disableModifications" }),
        __metadata("design:type", Boolean)
    ], DataSource.prototype, "disableModifications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disableServing" }),
        __metadata("design:type", Boolean)
    ], DataSource.prototype, "disableServing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], DataSource.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=indexingServiceAccounts" }),
        __metadata("design:type", Array)
    ], DataSource.prototype, "indexingServiceAccounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=itemsVisibility", elemType: GSuitePrincipal }),
        __metadata("design:type", Array)
    ], DataSource.prototype, "itemsVisibility", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], DataSource.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operationIds" }),
        __metadata("design:type", Array)
    ], DataSource.prototype, "operationIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=returnThumbnailUrls" }),
        __metadata("design:type", Boolean)
    ], DataSource.prototype, "returnThumbnailUrls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shortName" }),
        __metadata("design:type", String)
    ], DataSource.prototype, "shortName", void 0);
    return DataSource;
}(SpeakeasyBase));
export { DataSource };
