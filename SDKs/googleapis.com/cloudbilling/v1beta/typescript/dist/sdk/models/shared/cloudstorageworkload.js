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
import { Usage } from "./usage";
import { DualRegional } from "./dualregional";
import { MultiRegional } from "./multiregional";
import { Regional } from "./regional";
// CloudStorageWorkload
/**
 * Specifies usage of Cloud Storage resources.
**/
var CloudStorageWorkload = /** @class */ (function (_super) {
    __extends(CloudStorageWorkload, _super);
    function CloudStorageWorkload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataRetrieval" }),
        __metadata("design:type", Usage)
    ], CloudStorageWorkload.prototype, "dataRetrieval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataStored" }),
        __metadata("design:type", Usage)
    ], CloudStorageWorkload.prototype, "dataStored", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dualRegion" }),
        __metadata("design:type", DualRegional)
    ], CloudStorageWorkload.prototype, "dualRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=multiRegion" }),
        __metadata("design:type", MultiRegional)
    ], CloudStorageWorkload.prototype, "multiRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operationA" }),
        __metadata("design:type", Usage)
    ], CloudStorageWorkload.prototype, "operationA", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operationB" }),
        __metadata("design:type", Usage)
    ], CloudStorageWorkload.prototype, "operationB", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", Regional)
    ], CloudStorageWorkload.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storageClass" }),
        __metadata("design:type", String)
    ], CloudStorageWorkload.prototype, "storageClass", void 0);
    return CloudStorageWorkload;
}(SpeakeasyBase));
export { CloudStorageWorkload };
