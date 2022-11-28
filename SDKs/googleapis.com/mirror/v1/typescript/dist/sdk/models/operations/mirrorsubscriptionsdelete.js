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
var MirrorSubscriptionsDeletePathParams = /** @class */ (function (_super) {
    __extends(MirrorSubscriptionsDeletePathParams, _super);
    function MirrorSubscriptionsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], MirrorSubscriptionsDeletePathParams.prototype, "id", void 0);
    return MirrorSubscriptionsDeletePathParams;
}(SpeakeasyBase));
export { MirrorSubscriptionsDeletePathParams };
var MirrorSubscriptionsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(MirrorSubscriptionsDeleteQueryParams, _super);
    function MirrorSubscriptionsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MirrorSubscriptionsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MirrorSubscriptionsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MirrorSubscriptionsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MirrorSubscriptionsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MirrorSubscriptionsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MirrorSubscriptionsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], MirrorSubscriptionsDeleteQueryParams.prototype, "userIp", void 0);
    return MirrorSubscriptionsDeleteQueryParams;
}(SpeakeasyBase));
export { MirrorSubscriptionsDeleteQueryParams };
var MirrorSubscriptionsDeleteSecurity = /** @class */ (function (_super) {
    __extends(MirrorSubscriptionsDeleteSecurity, _super);
    function MirrorSubscriptionsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MirrorSubscriptionsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MirrorSubscriptionsDeleteSecurity.prototype, "oauth2c", void 0);
    return MirrorSubscriptionsDeleteSecurity;
}(SpeakeasyBase));
export { MirrorSubscriptionsDeleteSecurity };
var MirrorSubscriptionsDeleteRequest = /** @class */ (function (_super) {
    __extends(MirrorSubscriptionsDeleteRequest, _super);
    function MirrorSubscriptionsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MirrorSubscriptionsDeletePathParams)
    ], MirrorSubscriptionsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MirrorSubscriptionsDeleteQueryParams)
    ], MirrorSubscriptionsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MirrorSubscriptionsDeleteSecurity)
    ], MirrorSubscriptionsDeleteRequest.prototype, "security", void 0);
    return MirrorSubscriptionsDeleteRequest;
}(SpeakeasyBase));
export { MirrorSubscriptionsDeleteRequest };
var MirrorSubscriptionsDeleteResponse = /** @class */ (function (_super) {
    __extends(MirrorSubscriptionsDeleteResponse, _super);
    function MirrorSubscriptionsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MirrorSubscriptionsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MirrorSubscriptionsDeleteResponse.prototype, "statusCode", void 0);
    return MirrorSubscriptionsDeleteResponse;
}(SpeakeasyBase));
export { MirrorSubscriptionsDeleteResponse };
