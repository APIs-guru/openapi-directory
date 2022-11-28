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
var UpdateUserGrantsPathParams = /** @class */ (function (_super) {
    __extends(UpdateUserGrantsPathParams, _super);
    function UpdateUserGrantsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" }),
        __metadata("design:type", String)
    ], UpdateUserGrantsPathParams.prototype, "username", void 0);
    return UpdateUserGrantsPathParams;
}(SpeakeasyBase));
export { UpdateUserGrantsPathParams };
var UpdateUserGrantsSecurity = /** @class */ (function (_super) {
    __extends(UpdateUserGrantsSecurity, _super);
    function UpdateUserGrantsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], UpdateUserGrantsSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], UpdateUserGrantsSecurity.prototype, "oauth", void 0);
    return UpdateUserGrantsSecurity;
}(SpeakeasyBase));
export { UpdateUserGrantsSecurity };
var UpdateUserGrantsDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateUserGrantsDefaultApplicationJson, _super);
    function UpdateUserGrantsDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], UpdateUserGrantsDefaultApplicationJson.prototype, "errors", void 0);
    return UpdateUserGrantsDefaultApplicationJson;
}(SpeakeasyBase));
export { UpdateUserGrantsDefaultApplicationJson };
var UpdateUserGrantsRequest = /** @class */ (function (_super) {
    __extends(UpdateUserGrantsRequest, _super);
    function UpdateUserGrantsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateUserGrantsPathParams)
    ], UpdateUserGrantsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GrantsResponseInput)
    ], UpdateUserGrantsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateUserGrantsSecurity)
    ], UpdateUserGrantsRequest.prototype, "security", void 0);
    return UpdateUserGrantsRequest;
}(SpeakeasyBase));
export { UpdateUserGrantsRequest };
var UpdateUserGrantsResponse = /** @class */ (function (_super) {
    __extends(UpdateUserGrantsResponse, _super);
    function UpdateUserGrantsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateUserGrantsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GrantsResponse)
    ], UpdateUserGrantsResponse.prototype, "grantsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateUserGrantsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateUserGrantsDefaultApplicationJson)
    ], UpdateUserGrantsResponse.prototype, "updateUserGrantsDefaultApplicationJsonObject", void 0);
    return UpdateUserGrantsResponse;
}(SpeakeasyBase));
export { UpdateUserGrantsResponse };
