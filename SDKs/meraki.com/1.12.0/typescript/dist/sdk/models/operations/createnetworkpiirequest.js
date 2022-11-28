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
var CreateNetworkPiiRequestPathParams = /** @class */ (function (_super) {
    __extends(CreateNetworkPiiRequestPathParams, _super);
    function CreateNetworkPiiRequestPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], CreateNetworkPiiRequestPathParams.prototype, "networkId", void 0);
    return CreateNetworkPiiRequestPathParams;
}(SpeakeasyBase));
export { CreateNetworkPiiRequestPathParams };
export var CreateNetworkPiiRequestRequestBodyTypeEnum;
(function (CreateNetworkPiiRequestRequestBodyTypeEnum) {
    CreateNetworkPiiRequestRequestBodyTypeEnum["Delete"] = "delete";
    CreateNetworkPiiRequestRequestBodyTypeEnum["RestrictProcessing"] = "restrict processing";
})(CreateNetworkPiiRequestRequestBodyTypeEnum || (CreateNetworkPiiRequestRequestBodyTypeEnum = {}));
var CreateNetworkPiiRequestRequestBody = /** @class */ (function (_super) {
    __extends(CreateNetworkPiiRequestRequestBody, _super);
    function CreateNetworkPiiRequestRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datasets" }),
        __metadata("design:type", Array)
    ], CreateNetworkPiiRequestRequestBody.prototype, "datasets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], CreateNetworkPiiRequestRequestBody.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mac" }),
        __metadata("design:type", String)
    ], CreateNetworkPiiRequestRequestBody.prototype, "mac", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=smDeviceId" }),
        __metadata("design:type", String)
    ], CreateNetworkPiiRequestRequestBody.prototype, "smDeviceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=smUserId" }),
        __metadata("design:type", String)
    ], CreateNetworkPiiRequestRequestBody.prototype, "smUserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], CreateNetworkPiiRequestRequestBody.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], CreateNetworkPiiRequestRequestBody.prototype, "username", void 0);
    return CreateNetworkPiiRequestRequestBody;
}(SpeakeasyBase));
export { CreateNetworkPiiRequestRequestBody };
var CreateNetworkPiiRequestRequest = /** @class */ (function (_super) {
    __extends(CreateNetworkPiiRequestRequest, _super);
    function CreateNetworkPiiRequestRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateNetworkPiiRequestPathParams)
    ], CreateNetworkPiiRequestRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateNetworkPiiRequestRequestBody)
    ], CreateNetworkPiiRequestRequest.prototype, "request", void 0);
    return CreateNetworkPiiRequestRequest;
}(SpeakeasyBase));
export { CreateNetworkPiiRequestRequest };
var CreateNetworkPiiRequestResponse = /** @class */ (function (_super) {
    __extends(CreateNetworkPiiRequestResponse, _super);
    function CreateNetworkPiiRequestResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateNetworkPiiRequestResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateNetworkPiiRequestResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateNetworkPiiRequestResponse.prototype, "createNetworkPiiRequest201ApplicationJsonObject", void 0);
    return CreateNetworkPiiRequestResponse;
}(SpeakeasyBase));
export { CreateNetworkPiiRequestResponse };
