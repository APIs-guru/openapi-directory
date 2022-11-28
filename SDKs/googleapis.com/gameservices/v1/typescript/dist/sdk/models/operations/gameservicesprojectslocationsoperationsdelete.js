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
var GameservicesProjectsLocationsOperationsDeletePathParams = /** @class */ (function (_super) {
    __extends(GameservicesProjectsLocationsOperationsDeletePathParams, _super);
    function GameservicesProjectsLocationsOperationsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsOperationsDeletePathParams.prototype, "name", void 0);
    return GameservicesProjectsLocationsOperationsDeletePathParams;
}(SpeakeasyBase));
export { GameservicesProjectsLocationsOperationsDeletePathParams };
var GameservicesProjectsLocationsOperationsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(GameservicesProjectsLocationsOperationsDeleteQueryParams, _super);
    function GameservicesProjectsLocationsOperationsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsOperationsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsOperationsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsOperationsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsOperationsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsOperationsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsOperationsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsOperationsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GameservicesProjectsLocationsOperationsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsOperationsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsOperationsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsOperationsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return GameservicesProjectsLocationsOperationsDeleteQueryParams;
}(SpeakeasyBase));
export { GameservicesProjectsLocationsOperationsDeleteQueryParams };
var GameservicesProjectsLocationsOperationsDeleteSecurity = /** @class */ (function (_super) {
    __extends(GameservicesProjectsLocationsOperationsDeleteSecurity, _super);
    function GameservicesProjectsLocationsOperationsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GameservicesProjectsLocationsOperationsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GameservicesProjectsLocationsOperationsDeleteSecurity.prototype, "oauth2c", void 0);
    return GameservicesProjectsLocationsOperationsDeleteSecurity;
}(SpeakeasyBase));
export { GameservicesProjectsLocationsOperationsDeleteSecurity };
var GameservicesProjectsLocationsOperationsDeleteRequest = /** @class */ (function (_super) {
    __extends(GameservicesProjectsLocationsOperationsDeleteRequest, _super);
    function GameservicesProjectsLocationsOperationsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GameservicesProjectsLocationsOperationsDeletePathParams)
    ], GameservicesProjectsLocationsOperationsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GameservicesProjectsLocationsOperationsDeleteQueryParams)
    ], GameservicesProjectsLocationsOperationsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GameservicesProjectsLocationsOperationsDeleteSecurity)
    ], GameservicesProjectsLocationsOperationsDeleteRequest.prototype, "security", void 0);
    return GameservicesProjectsLocationsOperationsDeleteRequest;
}(SpeakeasyBase));
export { GameservicesProjectsLocationsOperationsDeleteRequest };
var GameservicesProjectsLocationsOperationsDeleteResponse = /** @class */ (function (_super) {
    __extends(GameservicesProjectsLocationsOperationsDeleteResponse, _super);
    function GameservicesProjectsLocationsOperationsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GameservicesProjectsLocationsOperationsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GameservicesProjectsLocationsOperationsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GameservicesProjectsLocationsOperationsDeleteResponse.prototype, "statusCode", void 0);
    return GameservicesProjectsLocationsOperationsDeleteResponse;
}(SpeakeasyBase));
export { GameservicesProjectsLocationsOperationsDeleteResponse };
