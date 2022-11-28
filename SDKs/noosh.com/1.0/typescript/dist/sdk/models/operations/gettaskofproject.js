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
var GetTaskOfProjectPathParams = /** @class */ (function (_super) {
    __extends(GetTaskOfProjectPathParams, _super);
    function GetTaskOfProjectPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" }),
        __metadata("design:type", String)
    ], GetTaskOfProjectPathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=task_id" }),
        __metadata("design:type", String)
    ], GetTaskOfProjectPathParams.prototype, "taskId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" }),
        __metadata("design:type", String)
    ], GetTaskOfProjectPathParams.prototype, "workgroupId", void 0);
    return GetTaskOfProjectPathParams;
}(SpeakeasyBase));
export { GetTaskOfProjectPathParams };
var GetTaskOfProjectRequest = /** @class */ (function (_super) {
    __extends(GetTaskOfProjectRequest, _super);
    function GetTaskOfProjectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTaskOfProjectPathParams)
    ], GetTaskOfProjectRequest.prototype, "pathParams", void 0);
    return GetTaskOfProjectRequest;
}(SpeakeasyBase));
export { GetTaskOfProjectRequest };
var GetTaskOfProjectResponse = /** @class */ (function (_super) {
    __extends(GetTaskOfProjectResponse, _super);
    function GetTaskOfProjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetTaskOfProjectResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTaskOfProjectResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetTaskOfProjectResponse.prototype, "httpStatusVo", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTaskOfProjectResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetTaskOfProjectResponse.prototype, "taskExpandVo", void 0);
    return GetTaskOfProjectResponse;
}(SpeakeasyBase));
export { GetTaskOfProjectResponse };
