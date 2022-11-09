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
var TasksTasksGetPathParams = /** @class */ (function (_super) {
    __extends(TasksTasksGetPathParams, _super);
    function TasksTasksGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=task" }),
        __metadata("design:type", String)
    ], TasksTasksGetPathParams.prototype, "task", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=tasklist" }),
        __metadata("design:type", String)
    ], TasksTasksGetPathParams.prototype, "tasklist", void 0);
    return TasksTasksGetPathParams;
}(SpeakeasyBase));
export { TasksTasksGetPathParams };
var TasksTasksGetQueryParams = /** @class */ (function (_super) {
    __extends(TasksTasksGetQueryParams, _super);
    function TasksTasksGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TasksTasksGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TasksTasksGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TasksTasksGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TasksTasksGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TasksTasksGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TasksTasksGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TasksTasksGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TasksTasksGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TasksTasksGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TasksTasksGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TasksTasksGetQueryParams.prototype, "uploadProtocol", void 0);
    return TasksTasksGetQueryParams;
}(SpeakeasyBase));
export { TasksTasksGetQueryParams };
var TasksTasksGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(TasksTasksGetSecurityOption1, _super);
    function TasksTasksGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TasksTasksGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TasksTasksGetSecurityOption1.prototype, "oauth2c", void 0);
    return TasksTasksGetSecurityOption1;
}(SpeakeasyBase));
export { TasksTasksGetSecurityOption1 };
var TasksTasksGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(TasksTasksGetSecurityOption2, _super);
    function TasksTasksGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TasksTasksGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TasksTasksGetSecurityOption2.prototype, "oauth2c", void 0);
    return TasksTasksGetSecurityOption2;
}(SpeakeasyBase));
export { TasksTasksGetSecurityOption2 };
var TasksTasksGetSecurity = /** @class */ (function (_super) {
    __extends(TasksTasksGetSecurity, _super);
    function TasksTasksGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", TasksTasksGetSecurityOption1)
    ], TasksTasksGetSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", TasksTasksGetSecurityOption2)
    ], TasksTasksGetSecurity.prototype, "option2", void 0);
    return TasksTasksGetSecurity;
}(SpeakeasyBase));
export { TasksTasksGetSecurity };
var TasksTasksGetRequest = /** @class */ (function (_super) {
    __extends(TasksTasksGetRequest, _super);
    function TasksTasksGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", TasksTasksGetPathParams)
    ], TasksTasksGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", TasksTasksGetQueryParams)
    ], TasksTasksGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", TasksTasksGetSecurity)
    ], TasksTasksGetRequest.prototype, "security", void 0);
    return TasksTasksGetRequest;
}(SpeakeasyBase));
export { TasksTasksGetRequest };
var TasksTasksGetResponse = /** @class */ (function (_super) {
    __extends(TasksTasksGetResponse, _super);
    function TasksTasksGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], TasksTasksGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], TasksTasksGetResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Task)
    ], TasksTasksGetResponse.prototype, "task", void 0);
    return TasksTasksGetResponse;
}(SpeakeasyBase));
export { TasksTasksGetResponse };
