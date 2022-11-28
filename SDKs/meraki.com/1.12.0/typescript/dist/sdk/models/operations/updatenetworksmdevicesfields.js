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
var UpdateNetworkSmDevicesFieldsPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkSmDevicesFieldsPathParams, _super);
    function UpdateNetworkSmDevicesFieldsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkSmDevicesFieldsPathParams.prototype, "networkId", void 0);
    return UpdateNetworkSmDevicesFieldsPathParams;
}(SpeakeasyBase));
export { UpdateNetworkSmDevicesFieldsPathParams };
// UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields
/**
 * The new fields of the device. Each field of this object is optional.
**/
var UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields = /** @class */ (function (_super) {
    __extends(UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields, _super);
    function UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields.prototype, "notes", void 0);
    return UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields;
}(SpeakeasyBase));
export { UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields };
var UpdateNetworkSmDevicesFieldsRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkSmDevicesFieldsRequestBody, _super);
    function UpdateNetworkSmDevicesFieldsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deviceFields" }),
        __metadata("design:type", UpdateNetworkSmDevicesFieldsRequestBodyDeviceFields)
    ], UpdateNetworkSmDevicesFieldsRequestBody.prototype, "deviceFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateNetworkSmDevicesFieldsRequestBody.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serial" }),
        __metadata("design:type", String)
    ], UpdateNetworkSmDevicesFieldsRequestBody.prototype, "serial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=wifiMac" }),
        __metadata("design:type", String)
    ], UpdateNetworkSmDevicesFieldsRequestBody.prototype, "wifiMac", void 0);
    return UpdateNetworkSmDevicesFieldsRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkSmDevicesFieldsRequestBody };
var UpdateNetworkSmDevicesFieldsRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkSmDevicesFieldsRequest, _super);
    function UpdateNetworkSmDevicesFieldsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkSmDevicesFieldsPathParams)
    ], UpdateNetworkSmDevicesFieldsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkSmDevicesFieldsRequestBody)
    ], UpdateNetworkSmDevicesFieldsRequest.prototype, "request", void 0);
    return UpdateNetworkSmDevicesFieldsRequest;
}(SpeakeasyBase));
export { UpdateNetworkSmDevicesFieldsRequest };
var UpdateNetworkSmDevicesFieldsResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkSmDevicesFieldsResponse, _super);
    function UpdateNetworkSmDevicesFieldsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkSmDevicesFieldsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkSmDevicesFieldsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkSmDevicesFieldsResponse.prototype, "updateNetworkSmDevicesFields200ApplicationJsonObject", void 0);
    return UpdateNetworkSmDevicesFieldsResponse;
}(SpeakeasyBase));
export { UpdateNetworkSmDevicesFieldsResponse };
