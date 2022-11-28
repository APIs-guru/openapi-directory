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
var UpdateNetworkSwitchDscpToCosMappingsPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchDscpToCosMappingsPathParams, _super);
    function UpdateNetworkSwitchDscpToCosMappingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchDscpToCosMappingsPathParams.prototype, "networkId", void 0);
    return UpdateNetworkSwitchDscpToCosMappingsPathParams;
}(SpeakeasyBase));
export { UpdateNetworkSwitchDscpToCosMappingsPathParams };
var UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings, _super);
    function UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cos" }),
        __metadata("design:type", Number)
    ], UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings.prototype, "cos", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dscp" }),
        __metadata("design:type", Number)
    ], UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings.prototype, "dscp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings.prototype, "title", void 0);
    return UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings;
}(SpeakeasyBase));
export { UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings };
var UpdateNetworkSwitchDscpToCosMappingsRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchDscpToCosMappingsRequestBody, _super);
    function UpdateNetworkSwitchDscpToCosMappingsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mappings", elemType: UpdateNetworkSwitchDscpToCosMappingsRequestBodyMappings }),
        __metadata("design:type", Array)
    ], UpdateNetworkSwitchDscpToCosMappingsRequestBody.prototype, "mappings", void 0);
    return UpdateNetworkSwitchDscpToCosMappingsRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkSwitchDscpToCosMappingsRequestBody };
var UpdateNetworkSwitchDscpToCosMappingsRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchDscpToCosMappingsRequest, _super);
    function UpdateNetworkSwitchDscpToCosMappingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkSwitchDscpToCosMappingsPathParams)
    ], UpdateNetworkSwitchDscpToCosMappingsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkSwitchDscpToCosMappingsRequestBody)
    ], UpdateNetworkSwitchDscpToCosMappingsRequest.prototype, "request", void 0);
    return UpdateNetworkSwitchDscpToCosMappingsRequest;
}(SpeakeasyBase));
export { UpdateNetworkSwitchDscpToCosMappingsRequest };
var UpdateNetworkSwitchDscpToCosMappingsResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkSwitchDscpToCosMappingsResponse, _super);
    function UpdateNetworkSwitchDscpToCosMappingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkSwitchDscpToCosMappingsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkSwitchDscpToCosMappingsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkSwitchDscpToCosMappingsResponse.prototype, "updateNetworkSwitchDscpToCosMappings200ApplicationJsonObject", void 0);
    return UpdateNetworkSwitchDscpToCosMappingsResponse;
}(SpeakeasyBase));
export { UpdateNetworkSwitchDscpToCosMappingsResponse };
