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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var TasksTasklistsGetPathParams = /** @class */ (function (_super) {
    __extends(TasksTasklistsGetPathParams, _super);
    function TasksTasklistsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=tasklist" }),
        __metadata("design:type", String)
    ], TasksTasklistsGetPathParams.prototype, "tasklist", void 0);
    return TasksTasklistsGetPathParams;
}(SpeakeasyBase));
export { TasksTasklistsGetPathParams };
var TasksTasklistsGetQueryParams = /** @class */ (function (_super) {
    __extends(TasksTasklistsGetQueryParams, _super);
    function TasksTasklistsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TasksTasklistsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TasksTasklistsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TasksTasklistsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TasksTasklistsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TasksTasklistsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TasksTasklistsGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TasksTasklistsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TasksTasklistsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TasksTasklistsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TasksTasklistsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TasksTasklistsGetQueryParams.prototype, "uploadProtocol", void 0);
    return TasksTasklistsGetQueryParams;
}(SpeakeasyBase));
export { TasksTasklistsGetQueryParams };
var TasksTasklistsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(TasksTasklistsGetSecurityOption1, _super);
    function TasksTasklistsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TasksTasklistsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TasksTasklistsGetSecurityOption1.prototype, "oauth2c", void 0);
    return TasksTasklistsGetSecurityOption1;
}(SpeakeasyBase));
export { TasksTasklistsGetSecurityOption1 };
var TasksTasklistsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(TasksTasklistsGetSecurityOption2, _super);
    function TasksTasklistsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TasksTasklistsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TasksTasklistsGetSecurityOption2.prototype, "oauth2c", void 0);
    return TasksTasklistsGetSecurityOption2;
}(SpeakeasyBase));
export { TasksTasklistsGetSecurityOption2 };
var TasksTasklistsGetSecurity = /** @class */ (function (_super) {
    __extends(TasksTasklistsGetSecurity, _super);
    function TasksTasklistsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", TasksTasklistsGetSecurityOption1)
    ], TasksTasklistsGetSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", TasksTasklistsGetSecurityOption2)
    ], TasksTasklistsGetSecurity.prototype, "option2", void 0);
    return TasksTasklistsGetSecurity;
}(SpeakeasyBase));
export { TasksTasklistsGetSecurity };
var TasksTasklistsGetRequest = /** @class */ (function (_super) {
    __extends(TasksTasklistsGetRequest, _super);
    function TasksTasklistsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", TasksTasklistsGetPathParams)
    ], TasksTasklistsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", TasksTasklistsGetQueryParams)
    ], TasksTasklistsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", TasksTasklistsGetSecurity)
    ], TasksTasklistsGetRequest.prototype, "security", void 0);
    return TasksTasklistsGetRequest;
}(SpeakeasyBase));
export { TasksTasklistsGetRequest };
var TasksTasklistsGetResponse = /** @class */ (function (_super) {
    __extends(TasksTasklistsGetResponse, _super);
    function TasksTasklistsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], TasksTasklistsGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], TasksTasklistsGetResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.TaskList)
    ], TasksTasklistsGetResponse.prototype, "taskList", void 0);
    return TasksTasklistsGetResponse;
}(SpeakeasyBase));
export { TasksTasklistsGetResponse };
