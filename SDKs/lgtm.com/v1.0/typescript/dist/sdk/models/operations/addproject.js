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
export var AddProjectModeEnum;
(function (AddProjectModeEnum) {
    AddProjectModeEnum["Full"] = "full";
    AddProjectModeEnum["Sparse"] = "sparse";
    AddProjectModeEnum["Upload"] = "upload";
})(AddProjectModeEnum || (AddProjectModeEnum = {}));
var AddProjectQueryParams = /** @class */ (function (_super) {
    __extends(AddProjectQueryParams, _super);
    function AddProjectQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=commit" }),
        __metadata("design:type", String)
    ], AddProjectQueryParams.prototype, "commit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date" }),
        __metadata("design:type", Date)
    ], AddProjectQueryParams.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" }),
        __metadata("design:type", Array)
    ], AddProjectQueryParams.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mode" }),
        __metadata("design:type", String)
    ], AddProjectQueryParams.prototype, "mode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=repository" }),
        __metadata("design:type", String)
    ], AddProjectQueryParams.prototype, "repository", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=worker-label" }),
        __metadata("design:type", Array)
    ], AddProjectQueryParams.prototype, "workerLabel", void 0);
    return AddProjectQueryParams;
}(SpeakeasyBase));
export { AddProjectQueryParams };
var AddProjectSecurity = /** @class */ (function (_super) {
    __extends(AddProjectSecurity, _super);
    function AddProjectSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeAccessToken)
    ], AddProjectSecurity.prototype, "accessToken", void 0);
    return AddProjectSecurity;
}(SpeakeasyBase));
export { AddProjectSecurity };
var AddProjectRequest = /** @class */ (function (_super) {
    __extends(AddProjectRequest, _super);
    function AddProjectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddProjectQueryParams)
    ], AddProjectRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/x-yaml" }),
        __metadata("design:type", String)
    ], AddProjectRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AddProjectSecurity)
    ], AddProjectRequest.prototype, "security", void 0);
    return AddProjectRequest;
}(SpeakeasyBase));
export { AddProjectRequest };
var AddProjectResponse = /** @class */ (function (_super) {
    __extends(AddProjectResponse, _super);
    function AddProjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AddProjectResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AddProjectResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], AddProjectResponse.prototype, "operation", void 0);
    return AddProjectResponse;
}(SpeakeasyBase));
export { AddProjectResponse };
