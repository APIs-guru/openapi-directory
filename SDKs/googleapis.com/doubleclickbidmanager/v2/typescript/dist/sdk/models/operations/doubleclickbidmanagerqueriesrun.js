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
var DoubleclickbidmanagerQueriesRunPathParams = /** @class */ (function (_super) {
    __extends(DoubleclickbidmanagerQueriesRunPathParams, _super);
    function DoubleclickbidmanagerQueriesRunPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=queryId" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesRunPathParams.prototype, "queryId", void 0);
    return DoubleclickbidmanagerQueriesRunPathParams;
}(SpeakeasyBase));
export { DoubleclickbidmanagerQueriesRunPathParams };
var DoubleclickbidmanagerQueriesRunQueryParams = /** @class */ (function (_super) {
    __extends(DoubleclickbidmanagerQueriesRunQueryParams, _super);
    function DoubleclickbidmanagerQueriesRunQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesRunQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesRunQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesRunQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesRunQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesRunQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesRunQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesRunQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DoubleclickbidmanagerQueriesRunQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesRunQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=synchronous" }),
        __metadata("design:type", Boolean)
    ], DoubleclickbidmanagerQueriesRunQueryParams.prototype, "synchronous", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesRunQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesRunQueryParams.prototype, "uploadProtocol", void 0);
    return DoubleclickbidmanagerQueriesRunQueryParams;
}(SpeakeasyBase));
export { DoubleclickbidmanagerQueriesRunQueryParams };
var DoubleclickbidmanagerQueriesRunSecurity = /** @class */ (function (_super) {
    __extends(DoubleclickbidmanagerQueriesRunSecurity, _super);
    function DoubleclickbidmanagerQueriesRunSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DoubleclickbidmanagerQueriesRunSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DoubleclickbidmanagerQueriesRunSecurity.prototype, "oauth2c", void 0);
    return DoubleclickbidmanagerQueriesRunSecurity;
}(SpeakeasyBase));
export { DoubleclickbidmanagerQueriesRunSecurity };
var DoubleclickbidmanagerQueriesRunRequest = /** @class */ (function (_super) {
    __extends(DoubleclickbidmanagerQueriesRunRequest, _super);
    function DoubleclickbidmanagerQueriesRunRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DoubleclickbidmanagerQueriesRunPathParams)
    ], DoubleclickbidmanagerQueriesRunRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DoubleclickbidmanagerQueriesRunQueryParams)
    ], DoubleclickbidmanagerQueriesRunRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RunQueryRequest)
    ], DoubleclickbidmanagerQueriesRunRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DoubleclickbidmanagerQueriesRunSecurity)
    ], DoubleclickbidmanagerQueriesRunRequest.prototype, "security", void 0);
    return DoubleclickbidmanagerQueriesRunRequest;
}(SpeakeasyBase));
export { DoubleclickbidmanagerQueriesRunRequest };
var DoubleclickbidmanagerQueriesRunResponse = /** @class */ (function (_super) {
    __extends(DoubleclickbidmanagerQueriesRunResponse, _super);
    function DoubleclickbidmanagerQueriesRunResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DoubleclickbidmanagerQueriesRunResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Report)
    ], DoubleclickbidmanagerQueriesRunResponse.prototype, "report", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DoubleclickbidmanagerQueriesRunResponse.prototype, "statusCode", void 0);
    return DoubleclickbidmanagerQueriesRunResponse;
}(SpeakeasyBase));
export { DoubleclickbidmanagerQueriesRunResponse };
