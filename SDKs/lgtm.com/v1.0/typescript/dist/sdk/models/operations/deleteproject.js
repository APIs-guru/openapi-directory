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
var DeleteProjectPathParams = /** @class */ (function (_super) {
    __extends(DeleteProjectPathParams, _super);
    function DeleteProjectPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-id" }),
        __metadata("design:type", Number)
    ], DeleteProjectPathParams.prototype, "projectId", void 0);
    return DeleteProjectPathParams;
}(SpeakeasyBase));
export { DeleteProjectPathParams };
var DeleteProjectSecurity = /** @class */ (function (_super) {
    __extends(DeleteProjectSecurity, _super);
    function DeleteProjectSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeAccessToken)
    ], DeleteProjectSecurity.prototype, "accessToken", void 0);
    return DeleteProjectSecurity;
}(SpeakeasyBase));
export { DeleteProjectSecurity };
var DeleteProjectRequest = /** @class */ (function (_super) {
    __extends(DeleteProjectRequest, _super);
    function DeleteProjectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteProjectPathParams)
    ], DeleteProjectRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteProjectSecurity)
    ], DeleteProjectRequest.prototype, "security", void 0);
    return DeleteProjectRequest;
}(SpeakeasyBase));
export { DeleteProjectRequest };
var DeleteProjectResponse = /** @class */ (function (_super) {
    __extends(DeleteProjectResponse, _super);
    function DeleteProjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteProjectResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteProjectResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ProjectDetails)
    ], DeleteProjectResponse.prototype, "projectDetails", void 0);
    return DeleteProjectResponse;
}(SpeakeasyBase));
export { DeleteProjectResponse };
