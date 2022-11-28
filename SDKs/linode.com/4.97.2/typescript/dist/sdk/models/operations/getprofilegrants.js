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
var GetProfileGrantsSecurity = /** @class */ (function (_super) {
    __extends(GetProfileGrantsSecurity, _super);
    function GetProfileGrantsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetProfileGrantsSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetProfileGrantsSecurity.prototype, "oauth", void 0);
    return GetProfileGrantsSecurity;
}(SpeakeasyBase));
export { GetProfileGrantsSecurity };
var GetProfileGrantsDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetProfileGrantsDefaultApplicationJson, _super);
    function GetProfileGrantsDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetProfileGrantsDefaultApplicationJson.prototype, "errors", void 0);
    return GetProfileGrantsDefaultApplicationJson;
}(SpeakeasyBase));
export { GetProfileGrantsDefaultApplicationJson };
var GetProfileGrantsRequest = /** @class */ (function (_super) {
    __extends(GetProfileGrantsRequest, _super);
    function GetProfileGrantsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProfileGrantsSecurity)
    ], GetProfileGrantsRequest.prototype, "security", void 0);
    return GetProfileGrantsRequest;
}(SpeakeasyBase));
export { GetProfileGrantsRequest };
var GetProfileGrantsResponse = /** @class */ (function (_super) {
    __extends(GetProfileGrantsResponse, _super);
    function GetProfileGrantsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetProfileGrantsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GrantsResponse)
    ], GetProfileGrantsResponse.prototype, "grantsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetProfileGrantsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProfileGrantsDefaultApplicationJson)
    ], GetProfileGrantsResponse.prototype, "getProfileGrantsDefaultApplicationJsonObject", void 0);
    return GetProfileGrantsResponse;
}(SpeakeasyBase));
export { GetProfileGrantsResponse };
