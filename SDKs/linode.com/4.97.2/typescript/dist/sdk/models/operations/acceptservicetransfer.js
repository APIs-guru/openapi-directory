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
import * as shared from "../shared";
var AcceptServiceTransferPathParams = /** @class */ (function (_super) {
    __extends(AcceptServiceTransferPathParams, _super);
    function AcceptServiceTransferPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=token" }),
        __metadata("design:type", String)
    ], AcceptServiceTransferPathParams.prototype, "token", void 0);
    return AcceptServiceTransferPathParams;
}(SpeakeasyBase));
export { AcceptServiceTransferPathParams };
var AcceptServiceTransferSecurity = /** @class */ (function (_super) {
    __extends(AcceptServiceTransferSecurity, _super);
    function AcceptServiceTransferSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], AcceptServiceTransferSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], AcceptServiceTransferSecurity.prototype, "oauth", void 0);
    return AcceptServiceTransferSecurity;
}(SpeakeasyBase));
export { AcceptServiceTransferSecurity };
var AcceptServiceTransferDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(AcceptServiceTransferDefaultApplicationJson, _super);
    function AcceptServiceTransferDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], AcceptServiceTransferDefaultApplicationJson.prototype, "errors", void 0);
    return AcceptServiceTransferDefaultApplicationJson;
}(SpeakeasyBase));
export { AcceptServiceTransferDefaultApplicationJson };
var AcceptServiceTransferRequest = /** @class */ (function (_super) {
    __extends(AcceptServiceTransferRequest, _super);
    function AcceptServiceTransferRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AcceptServiceTransferPathParams)
    ], AcceptServiceTransferRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AcceptServiceTransferSecurity)
    ], AcceptServiceTransferRequest.prototype, "security", void 0);
    return AcceptServiceTransferRequest;
}(SpeakeasyBase));
export { AcceptServiceTransferRequest };
var AcceptServiceTransferResponse = /** @class */ (function (_super) {
    __extends(AcceptServiceTransferResponse, _super);
    function AcceptServiceTransferResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AcceptServiceTransferResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AcceptServiceTransferResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], AcceptServiceTransferResponse.prototype, "acceptServiceTransfer200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AcceptServiceTransferDefaultApplicationJson)
    ], AcceptServiceTransferResponse.prototype, "acceptServiceTransferDefaultApplicationJsonObject", void 0);
    return AcceptServiceTransferResponse;
}(SpeakeasyBase));
export { AcceptServiceTransferResponse };
