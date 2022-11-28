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
var ResetDiskPasswordPathParams = /** @class */ (function (_super) {
    __extends(ResetDiskPasswordPathParams, _super);
    function ResetDiskPasswordPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=diskId" }),
        __metadata("design:type", Number)
    ], ResetDiskPasswordPathParams.prototype, "diskId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" }),
        __metadata("design:type", Number)
    ], ResetDiskPasswordPathParams.prototype, "linodeId", void 0);
    return ResetDiskPasswordPathParams;
}(SpeakeasyBase));
export { ResetDiskPasswordPathParams };
var ResetDiskPasswordSecurity = /** @class */ (function (_super) {
    __extends(ResetDiskPasswordSecurity, _super);
    function ResetDiskPasswordSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], ResetDiskPasswordSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], ResetDiskPasswordSecurity.prototype, "oauth", void 0);
    return ResetDiskPasswordSecurity;
}(SpeakeasyBase));
export { ResetDiskPasswordSecurity };
var ResetDiskPasswordDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(ResetDiskPasswordDefaultApplicationJson, _super);
    function ResetDiskPasswordDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], ResetDiskPasswordDefaultApplicationJson.prototype, "errors", void 0);
    return ResetDiskPasswordDefaultApplicationJson;
}(SpeakeasyBase));
export { ResetDiskPasswordDefaultApplicationJson };
var ResetDiskPasswordRequest = /** @class */ (function (_super) {
    __extends(ResetDiskPasswordRequest, _super);
    function ResetDiskPasswordRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResetDiskPasswordPathParams)
    ], ResetDiskPasswordRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Object)
    ], ResetDiskPasswordRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResetDiskPasswordSecurity)
    ], ResetDiskPasswordRequest.prototype, "security", void 0);
    return ResetDiskPasswordRequest;
}(SpeakeasyBase));
export { ResetDiskPasswordRequest };
var ResetDiskPasswordResponse = /** @class */ (function (_super) {
    __extends(ResetDiskPasswordResponse, _super);
    function ResetDiskPasswordResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ResetDiskPasswordResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ResetDiskPasswordResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ResetDiskPasswordResponse.prototype, "resetDiskPassword200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResetDiskPasswordDefaultApplicationJson)
    ], ResetDiskPasswordResponse.prototype, "resetDiskPasswordDefaultApplicationJsonObject", void 0);
    return ResetDiskPasswordResponse;
}(SpeakeasyBase));
export { ResetDiskPasswordResponse };
