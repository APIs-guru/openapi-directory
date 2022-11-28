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
var CreateTagPathParams = /** @class */ (function (_super) {
    __extends(CreateTagPathParams, _super);
    function CreateTagPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], CreateTagPathParams.prototype, "projectId", void 0);
    return CreateTagPathParams;
}(SpeakeasyBase));
export { CreateTagPathParams };
var CreateTagQueryParams = /** @class */ (function (_super) {
    __extends(CreateTagQueryParams, _super);
    function CreateTagQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=description" }),
        __metadata("design:type", String)
    ], CreateTagQueryParams.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], CreateTagQueryParams.prototype, "name", void 0);
    return CreateTagQueryParams;
}(SpeakeasyBase));
export { CreateTagQueryParams };
var CreateTagHeaders = /** @class */ (function (_super) {
    __extends(CreateTagHeaders, _super);
    function CreateTagHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" }),
        __metadata("design:type", String)
    ], CreateTagHeaders.prototype, "trainingKey", void 0);
    return CreateTagHeaders;
}(SpeakeasyBase));
export { CreateTagHeaders };
var CreateTagRequest = /** @class */ (function (_super) {
    __extends(CreateTagRequest, _super);
    function CreateTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateTagPathParams)
    ], CreateTagRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateTagQueryParams)
    ], CreateTagRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateTagHeaders)
    ], CreateTagRequest.prototype, "headers", void 0);
    return CreateTagRequest;
}(SpeakeasyBase));
export { CreateTagRequest };
var CreateTagResponse = /** @class */ (function (_super) {
    __extends(CreateTagResponse, _super);
    function CreateTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], CreateTagResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateTagResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateTagResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Tag)
    ], CreateTagResponse.prototype, "tag", void 0);
    return CreateTagResponse;
}(SpeakeasyBase));
export { CreateTagResponse };
