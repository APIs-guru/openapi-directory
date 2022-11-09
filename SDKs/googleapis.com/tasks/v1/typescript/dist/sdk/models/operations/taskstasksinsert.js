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
var TasksTasksInsertPathParams = /** @class */ (function (_super) {
    __extends(TasksTasksInsertPathParams, _super);
    function TasksTasksInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=tasklist" }),
        __metadata("design:type", String)
    ], TasksTasksInsertPathParams.prototype, "tasklist", void 0);
    return TasksTasksInsertPathParams;
}(SpeakeasyBase));
export { TasksTasksInsertPathParams };
var TasksTasksInsertQueryParams = /** @class */ (function (_super) {
    __extends(TasksTasksInsertQueryParams, _super);
    function TasksTasksInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TasksTasksInsertQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TasksTasksInsertQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TasksTasksInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TasksTasksInsertQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TasksTasksInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TasksTasksInsertQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TasksTasksInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=parent" }),
        __metadata("design:type", String)
    ], TasksTasksInsertQueryParams.prototype, "parent", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TasksTasksInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=previous" }),
        __metadata("design:type", String)
    ], TasksTasksInsertQueryParams.prototype, "previous", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TasksTasksInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TasksTasksInsertQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TasksTasksInsertQueryParams.prototype, "uploadProtocol", void 0);
    return TasksTasksInsertQueryParams;
}(SpeakeasyBase));
export { TasksTasksInsertQueryParams };
var TasksTasksInsertSecurity = /** @class */ (function (_super) {
    __extends(TasksTasksInsertSecurity, _super);
    function TasksTasksInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TasksTasksInsertSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TasksTasksInsertSecurity.prototype, "oauth2c", void 0);
    return TasksTasksInsertSecurity;
}(SpeakeasyBase));
export { TasksTasksInsertSecurity };
var TasksTasksInsertRequest = /** @class */ (function (_super) {
    __extends(TasksTasksInsertRequest, _super);
    function TasksTasksInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", TasksTasksInsertPathParams)
    ], TasksTasksInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", TasksTasksInsertQueryParams)
    ], TasksTasksInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Task)
    ], TasksTasksInsertRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", TasksTasksInsertSecurity)
    ], TasksTasksInsertRequest.prototype, "security", void 0);
    return TasksTasksInsertRequest;
}(SpeakeasyBase));
export { TasksTasksInsertRequest };
var TasksTasksInsertResponse = /** @class */ (function (_super) {
    __extends(TasksTasksInsertResponse, _super);
    function TasksTasksInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], TasksTasksInsertResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], TasksTasksInsertResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Task)
    ], TasksTasksInsertResponse.prototype, "task", void 0);
    return TasksTasksInsertResponse;
}(SpeakeasyBase));
export { TasksTasksInsertResponse };
