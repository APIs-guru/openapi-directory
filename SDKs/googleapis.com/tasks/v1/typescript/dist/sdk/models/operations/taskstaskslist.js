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
var TasksTasksListPathParams = /** @class */ (function (_super) {
    __extends(TasksTasksListPathParams, _super);
    function TasksTasksListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tasklist" }),
        __metadata("design:type", String)
    ], TasksTasksListPathParams.prototype, "tasklist", void 0);
    return TasksTasksListPathParams;
}(SpeakeasyBase));
export { TasksTasksListPathParams };
var TasksTasksListQueryParams = /** @class */ (function (_super) {
    __extends(TasksTasksListQueryParams, _super);
    function TasksTasksListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], TasksTasksListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], TasksTasksListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], TasksTasksListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], TasksTasksListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=completedMax" }),
        __metadata("design:type", String)
    ], TasksTasksListQueryParams.prototype, "completedMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=completedMin" }),
        __metadata("design:type", String)
    ], TasksTasksListQueryParams.prototype, "completedMin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dueMax" }),
        __metadata("design:type", String)
    ], TasksTasksListQueryParams.prototype, "dueMax", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dueMin" }),
        __metadata("design:type", String)
    ], TasksTasksListQueryParams.prototype, "dueMin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], TasksTasksListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], TasksTasksListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], TasksTasksListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], TasksTasksListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], TasksTasksListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], TasksTasksListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], TasksTasksListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showCompleted" }),
        __metadata("design:type", Boolean)
    ], TasksTasksListQueryParams.prototype, "showCompleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showDeleted" }),
        __metadata("design:type", Boolean)
    ], TasksTasksListQueryParams.prototype, "showDeleted", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=showHidden" }),
        __metadata("design:type", Boolean)
    ], TasksTasksListQueryParams.prototype, "showHidden", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedMin" }),
        __metadata("design:type", String)
    ], TasksTasksListQueryParams.prototype, "updatedMin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], TasksTasksListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], TasksTasksListQueryParams.prototype, "uploadProtocol", void 0);
    return TasksTasksListQueryParams;
}(SpeakeasyBase));
export { TasksTasksListQueryParams };
var TasksTasksListSecurityOption1 = /** @class */ (function (_super) {
    __extends(TasksTasksListSecurityOption1, _super);
    function TasksTasksListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TasksTasksListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TasksTasksListSecurityOption1.prototype, "oauth2c", void 0);
    return TasksTasksListSecurityOption1;
}(SpeakeasyBase));
export { TasksTasksListSecurityOption1 };
var TasksTasksListSecurityOption2 = /** @class */ (function (_super) {
    __extends(TasksTasksListSecurityOption2, _super);
    function TasksTasksListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], TasksTasksListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], TasksTasksListSecurityOption2.prototype, "oauth2c", void 0);
    return TasksTasksListSecurityOption2;
}(SpeakeasyBase));
export { TasksTasksListSecurityOption2 };
var TasksTasksListSecurity = /** @class */ (function (_super) {
    __extends(TasksTasksListSecurity, _super);
    function TasksTasksListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TasksTasksListSecurityOption1)
    ], TasksTasksListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", TasksTasksListSecurityOption2)
    ], TasksTasksListSecurity.prototype, "option2", void 0);
    return TasksTasksListSecurity;
}(SpeakeasyBase));
export { TasksTasksListSecurity };
var TasksTasksListRequest = /** @class */ (function (_super) {
    __extends(TasksTasksListRequest, _super);
    function TasksTasksListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TasksTasksListPathParams)
    ], TasksTasksListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TasksTasksListQueryParams)
    ], TasksTasksListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", TasksTasksListSecurity)
    ], TasksTasksListRequest.prototype, "security", void 0);
    return TasksTasksListRequest;
}(SpeakeasyBase));
export { TasksTasksListRequest };
var TasksTasksListResponse = /** @class */ (function (_super) {
    __extends(TasksTasksListResponse, _super);
    function TasksTasksListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], TasksTasksListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], TasksTasksListResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Tasks)
    ], TasksTasksListResponse.prototype, "tasks", void 0);
    return TasksTasksListResponse;
}(SpeakeasyBase));
export { TasksTasksListResponse };
