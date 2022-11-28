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
import { IdFilter } from "./idfilter";
import { InventorySourceFilter } from "./inventorysourcefilter";
import { ParentEntityFilter } from "./parententityfilter";
export var CreateSdfDownloadTaskRequestVersionEnum;
(function (CreateSdfDownloadTaskRequestVersionEnum) {
    CreateSdfDownloadTaskRequestVersionEnum["SdfVersionUnspecified"] = "SDF_VERSION_UNSPECIFIED";
    CreateSdfDownloadTaskRequestVersionEnum["SdfVersion31"] = "SDF_VERSION_3_1";
    CreateSdfDownloadTaskRequestVersionEnum["SdfVersion4"] = "SDF_VERSION_4";
    CreateSdfDownloadTaskRequestVersionEnum["SdfVersion41"] = "SDF_VERSION_4_1";
    CreateSdfDownloadTaskRequestVersionEnum["SdfVersion42"] = "SDF_VERSION_4_2";
    CreateSdfDownloadTaskRequestVersionEnum["SdfVersion5"] = "SDF_VERSION_5";
    CreateSdfDownloadTaskRequestVersionEnum["SdfVersion51"] = "SDF_VERSION_5_1";
    CreateSdfDownloadTaskRequestVersionEnum["SdfVersion52"] = "SDF_VERSION_5_2";
    CreateSdfDownloadTaskRequestVersionEnum["SdfVersion53"] = "SDF_VERSION_5_3";
    CreateSdfDownloadTaskRequestVersionEnum["SdfVersion54"] = "SDF_VERSION_5_4";
    CreateSdfDownloadTaskRequestVersionEnum["SdfVersion55"] = "SDF_VERSION_5_5";
})(CreateSdfDownloadTaskRequestVersionEnum || (CreateSdfDownloadTaskRequestVersionEnum = {}));
// CreateSdfDownloadTaskRequest
/**
 * Request message for [SdfDownloadTaskService.CreateSdfDownloadTask].
**/
var CreateSdfDownloadTaskRequest = /** @class */ (function (_super) {
    __extends(CreateSdfDownloadTaskRequest, _super);
    function CreateSdfDownloadTaskRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=advertiserId" }),
        __metadata("design:type", String)
    ], CreateSdfDownloadTaskRequest.prototype, "advertiserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=idFilter" }),
        __metadata("design:type", IdFilter)
    ], CreateSdfDownloadTaskRequest.prototype, "idFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=inventorySourceFilter" }),
        __metadata("design:type", InventorySourceFilter)
    ], CreateSdfDownloadTaskRequest.prototype, "inventorySourceFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentEntityFilter" }),
        __metadata("design:type", ParentEntityFilter)
    ], CreateSdfDownloadTaskRequest.prototype, "parentEntityFilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=partnerId" }),
        __metadata("design:type", String)
    ], CreateSdfDownloadTaskRequest.prototype, "partnerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], CreateSdfDownloadTaskRequest.prototype, "version", void 0);
    return CreateSdfDownloadTaskRequest;
}(SpeakeasyBase));
export { CreateSdfDownloadTaskRequest };
