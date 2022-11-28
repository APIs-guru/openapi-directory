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
var AllocateIpSecurity = /** @class */ (function (_super) {
    __extends(AllocateIpSecurity, _super);
    function AllocateIpSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], AllocateIpSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], AllocateIpSecurity.prototype, "oauth", void 0);
    return AllocateIpSecurity;
}(SpeakeasyBase));
export { AllocateIpSecurity };
var AllocateIpDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(AllocateIpDefaultApplicationJson, _super);
    function AllocateIpDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], AllocateIpDefaultApplicationJson.prototype, "errors", void 0);
    return AllocateIpDefaultApplicationJson;
}(SpeakeasyBase));
export { AllocateIpDefaultApplicationJson };
var AllocateIpRequest = /** @class */ (function (_super) {
    __extends(AllocateIpRequest, _super);
    function AllocateIpRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], AllocateIpRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AllocateIpSecurity)
    ], AllocateIpRequest.prototype, "security", void 0);
    return AllocateIpRequest;
}(SpeakeasyBase));
export { AllocateIpRequest };
var AllocateIpResponse = /** @class */ (function (_super) {
    __extends(AllocateIpResponse, _super);
    function AllocateIpResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AllocateIpResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.IpAddress)
    ], AllocateIpResponse.prototype, "ipAddress", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AllocateIpResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AllocateIpDefaultApplicationJson)
    ], AllocateIpResponse.prototype, "allocateIpDefaultApplicationJsonObject", void 0);
    return AllocateIpResponse;
}(SpeakeasyBase));
export { AllocateIpResponse };
