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
var ModifyNetworkSmDevicesTagsPathParams = /** @class */ (function (_super) {
    __extends(ModifyNetworkSmDevicesTagsPathParams, _super);
    function ModifyNetworkSmDevicesTagsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], ModifyNetworkSmDevicesTagsPathParams.prototype, "networkId", void 0);
    return ModifyNetworkSmDevicesTagsPathParams;
}(SpeakeasyBase));
export { ModifyNetworkSmDevicesTagsPathParams };
var ModifyNetworkSmDevicesTagsRequestBody = /** @class */ (function (_super) {
    __extends(ModifyNetworkSmDevicesTagsRequestBody, _super);
    function ModifyNetworkSmDevicesTagsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ids" }),
        __metadata("design:type", Array)
    ], ModifyNetworkSmDevicesTagsRequestBody.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scope" }),
        __metadata("design:type", Array)
    ], ModifyNetworkSmDevicesTagsRequestBody.prototype, "scope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serials" }),
        __metadata("design:type", Array)
    ], ModifyNetworkSmDevicesTagsRequestBody.prototype, "serials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], ModifyNetworkSmDevicesTagsRequestBody.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateAction" }),
        __metadata("design:type", String)
    ], ModifyNetworkSmDevicesTagsRequestBody.prototype, "updateAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wifiMacs" }),
        __metadata("design:type", Array)
    ], ModifyNetworkSmDevicesTagsRequestBody.prototype, "wifiMacs", void 0);
    return ModifyNetworkSmDevicesTagsRequestBody;
}(SpeakeasyBase));
export { ModifyNetworkSmDevicesTagsRequestBody };
var ModifyNetworkSmDevicesTagsRequest = /** @class */ (function (_super) {
    __extends(ModifyNetworkSmDevicesTagsRequest, _super);
    function ModifyNetworkSmDevicesTagsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ModifyNetworkSmDevicesTagsPathParams)
    ], ModifyNetworkSmDevicesTagsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ModifyNetworkSmDevicesTagsRequestBody)
    ], ModifyNetworkSmDevicesTagsRequest.prototype, "request", void 0);
    return ModifyNetworkSmDevicesTagsRequest;
}(SpeakeasyBase));
export { ModifyNetworkSmDevicesTagsRequest };
var ModifyNetworkSmDevicesTagsResponse = /** @class */ (function (_super) {
    __extends(ModifyNetworkSmDevicesTagsResponse, _super);
    function ModifyNetworkSmDevicesTagsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ModifyNetworkSmDevicesTagsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ModifyNetworkSmDevicesTagsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ModifyNetworkSmDevicesTagsResponse.prototype, "modifyNetworkSmDevicesTags200ApplicationJsonObject", void 0);
    return ModifyNetworkSmDevicesTagsResponse;
}(SpeakeasyBase));
export { ModifyNetworkSmDevicesTagsResponse };
