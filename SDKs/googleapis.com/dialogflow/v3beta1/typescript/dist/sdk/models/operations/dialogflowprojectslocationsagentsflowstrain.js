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
var DialogflowProjectsLocationsAgentsFlowsTrainPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsTrainPathParams, _super);
    function DialogflowProjectsLocationsAgentsFlowsTrainPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsTrainPathParams.prototype, "name", void 0);
    return DialogflowProjectsLocationsAgentsFlowsTrainPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsTrainPathParams };
var DialogflowProjectsLocationsAgentsFlowsTrainQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsTrainQueryParams, _super);
    function DialogflowProjectsLocationsAgentsFlowsTrainQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsTrainQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsTrainQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsTrainQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsTrainQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsTrainQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsTrainQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsTrainQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsLocationsAgentsFlowsTrainQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsTrainQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsTrainQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsTrainQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsLocationsAgentsFlowsTrainQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsTrainQueryParams };
var DialogflowProjectsLocationsAgentsFlowsTrainSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsTrainSecurityOption1, _super);
    function DialogflowProjectsLocationsAgentsFlowsTrainSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsFlowsTrainSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsFlowsTrainSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsFlowsTrainSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsTrainSecurityOption1 };
var DialogflowProjectsLocationsAgentsFlowsTrainSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsTrainSecurityOption2, _super);
    function DialogflowProjectsLocationsAgentsFlowsTrainSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsLocationsAgentsFlowsTrainSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsLocationsAgentsFlowsTrainSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsLocationsAgentsFlowsTrainSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsTrainSecurityOption2 };
var DialogflowProjectsLocationsAgentsFlowsTrainSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsTrainSecurity, _super);
    function DialogflowProjectsLocationsAgentsFlowsTrainSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsFlowsTrainSecurityOption1)
    ], DialogflowProjectsLocationsAgentsFlowsTrainSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsLocationsAgentsFlowsTrainSecurityOption2)
    ], DialogflowProjectsLocationsAgentsFlowsTrainSecurity.prototype, "option2", void 0);
    return DialogflowProjectsLocationsAgentsFlowsTrainSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsTrainSecurity };
var DialogflowProjectsLocationsAgentsFlowsTrainRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsTrainRequest, _super);
    function DialogflowProjectsLocationsAgentsFlowsTrainRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsFlowsTrainPathParams)
    ], DialogflowProjectsLocationsAgentsFlowsTrainRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsFlowsTrainQueryParams)
    ], DialogflowProjectsLocationsAgentsFlowsTrainRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], DialogflowProjectsLocationsAgentsFlowsTrainRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsLocationsAgentsFlowsTrainSecurity)
    ], DialogflowProjectsLocationsAgentsFlowsTrainRequest.prototype, "security", void 0);
    return DialogflowProjectsLocationsAgentsFlowsTrainRequest;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsTrainRequest };
var DialogflowProjectsLocationsAgentsFlowsTrainResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsLocationsAgentsFlowsTrainResponse, _super);
    function DialogflowProjectsLocationsAgentsFlowsTrainResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsLocationsAgentsFlowsTrainResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], DialogflowProjectsLocationsAgentsFlowsTrainResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsLocationsAgentsFlowsTrainResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsLocationsAgentsFlowsTrainResponse;
}(SpeakeasyBase));
export { DialogflowProjectsLocationsAgentsFlowsTrainResponse };
