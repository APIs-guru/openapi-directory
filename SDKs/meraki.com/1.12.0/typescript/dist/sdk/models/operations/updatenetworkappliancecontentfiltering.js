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
var UpdateNetworkApplianceContentFilteringPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceContentFilteringPathParams, _super);
    function UpdateNetworkApplianceContentFilteringPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceContentFilteringPathParams.prototype, "networkId", void 0);
    return UpdateNetworkApplianceContentFilteringPathParams;
}(SpeakeasyBase));
export { UpdateNetworkApplianceContentFilteringPathParams };
export var UpdateNetworkApplianceContentFilteringRequestBodyUrlCategoryListSizeEnum;
(function (UpdateNetworkApplianceContentFilteringRequestBodyUrlCategoryListSizeEnum) {
    UpdateNetworkApplianceContentFilteringRequestBodyUrlCategoryListSizeEnum["TopSites"] = "topSites";
    UpdateNetworkApplianceContentFilteringRequestBodyUrlCategoryListSizeEnum["FullList"] = "fullList";
})(UpdateNetworkApplianceContentFilteringRequestBodyUrlCategoryListSizeEnum || (UpdateNetworkApplianceContentFilteringRequestBodyUrlCategoryListSizeEnum = {}));
var UpdateNetworkApplianceContentFilteringRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceContentFilteringRequestBody, _super);
    function UpdateNetworkApplianceContentFilteringRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowedUrlPatterns" }),
        __metadata("design:type", Array)
    ], UpdateNetworkApplianceContentFilteringRequestBody.prototype, "allowedUrlPatterns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blockedUrlCategories" }),
        __metadata("design:type", Array)
    ], UpdateNetworkApplianceContentFilteringRequestBody.prototype, "blockedUrlCategories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blockedUrlPatterns" }),
        __metadata("design:type", Array)
    ], UpdateNetworkApplianceContentFilteringRequestBody.prototype, "blockedUrlPatterns", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=urlCategoryListSize" }),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceContentFilteringRequestBody.prototype, "urlCategoryListSize", void 0);
    return UpdateNetworkApplianceContentFilteringRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkApplianceContentFilteringRequestBody };
var UpdateNetworkApplianceContentFilteringRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceContentFilteringRequest, _super);
    function UpdateNetworkApplianceContentFilteringRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkApplianceContentFilteringPathParams)
    ], UpdateNetworkApplianceContentFilteringRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkApplianceContentFilteringRequestBody)
    ], UpdateNetworkApplianceContentFilteringRequest.prototype, "request", void 0);
    return UpdateNetworkApplianceContentFilteringRequest;
}(SpeakeasyBase));
export { UpdateNetworkApplianceContentFilteringRequest };
var UpdateNetworkApplianceContentFilteringResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkApplianceContentFilteringResponse, _super);
    function UpdateNetworkApplianceContentFilteringResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkApplianceContentFilteringResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkApplianceContentFilteringResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkApplianceContentFilteringResponse.prototype, "updateNetworkApplianceContentFiltering200ApplicationJsonObject", void 0);
    return UpdateNetworkApplianceContentFilteringResponse;
}(SpeakeasyBase));
export { UpdateNetworkApplianceContentFilteringResponse };
