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
var DialogflowProjectsOperationsCancelPathParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsOperationsCancelPathParams, _super);
    function DialogflowProjectsOperationsCancelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DialogflowProjectsOperationsCancelPathParams.prototype, "name", void 0);
    return DialogflowProjectsOperationsCancelPathParams;
}(SpeakeasyBase));
export { DialogflowProjectsOperationsCancelPathParams };
var DialogflowProjectsOperationsCancelQueryParams = /** @class */ (function (_super) {
    __extends(DialogflowProjectsOperationsCancelQueryParams, _super);
    function DialogflowProjectsOperationsCancelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DialogflowProjectsOperationsCancelQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsOperationsCancelQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DialogflowProjectsOperationsCancelQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DialogflowProjectsOperationsCancelQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DialogflowProjectsOperationsCancelQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DialogflowProjectsOperationsCancelQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DialogflowProjectsOperationsCancelQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DialogflowProjectsOperationsCancelQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DialogflowProjectsOperationsCancelQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DialogflowProjectsOperationsCancelQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DialogflowProjectsOperationsCancelQueryParams.prototype, "uploadProtocol", void 0);
    return DialogflowProjectsOperationsCancelQueryParams;
}(SpeakeasyBase));
export { DialogflowProjectsOperationsCancelQueryParams };
var DialogflowProjectsOperationsCancelSecurityOption1 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsOperationsCancelSecurityOption1, _super);
    function DialogflowProjectsOperationsCancelSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsOperationsCancelSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsOperationsCancelSecurityOption1.prototype, "oauth2c", void 0);
    return DialogflowProjectsOperationsCancelSecurityOption1;
}(SpeakeasyBase));
export { DialogflowProjectsOperationsCancelSecurityOption1 };
var DialogflowProjectsOperationsCancelSecurityOption2 = /** @class */ (function (_super) {
    __extends(DialogflowProjectsOperationsCancelSecurityOption2, _super);
    function DialogflowProjectsOperationsCancelSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DialogflowProjectsOperationsCancelSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DialogflowProjectsOperationsCancelSecurityOption2.prototype, "oauth2c", void 0);
    return DialogflowProjectsOperationsCancelSecurityOption2;
}(SpeakeasyBase));
export { DialogflowProjectsOperationsCancelSecurityOption2 };
var DialogflowProjectsOperationsCancelSecurity = /** @class */ (function (_super) {
    __extends(DialogflowProjectsOperationsCancelSecurity, _super);
    function DialogflowProjectsOperationsCancelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsOperationsCancelSecurityOption1)
    ], DialogflowProjectsOperationsCancelSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DialogflowProjectsOperationsCancelSecurityOption2)
    ], DialogflowProjectsOperationsCancelSecurity.prototype, "option2", void 0);
    return DialogflowProjectsOperationsCancelSecurity;
}(SpeakeasyBase));
export { DialogflowProjectsOperationsCancelSecurity };
var DialogflowProjectsOperationsCancelRequest = /** @class */ (function (_super) {
    __extends(DialogflowProjectsOperationsCancelRequest, _super);
    function DialogflowProjectsOperationsCancelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsOperationsCancelPathParams)
    ], DialogflowProjectsOperationsCancelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsOperationsCancelQueryParams)
    ], DialogflowProjectsOperationsCancelRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DialogflowProjectsOperationsCancelSecurity)
    ], DialogflowProjectsOperationsCancelRequest.prototype, "security", void 0);
    return DialogflowProjectsOperationsCancelRequest;
}(SpeakeasyBase));
export { DialogflowProjectsOperationsCancelRequest };
var DialogflowProjectsOperationsCancelResponse = /** @class */ (function (_super) {
    __extends(DialogflowProjectsOperationsCancelResponse, _super);
    function DialogflowProjectsOperationsCancelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DialogflowProjectsOperationsCancelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DialogflowProjectsOperationsCancelResponse.prototype, "googleProtobufEmpty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DialogflowProjectsOperationsCancelResponse.prototype, "statusCode", void 0);
    return DialogflowProjectsOperationsCancelResponse;
}(SpeakeasyBase));
export { DialogflowProjectsOperationsCancelResponse };
