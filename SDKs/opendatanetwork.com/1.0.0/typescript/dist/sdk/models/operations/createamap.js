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
var CreateAMapQueryParams = /** @class */ (function (_super) {
    __extends(CreateAMapQueryParams, _super);
    function CreateAMapQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=app_token" }),
        __metadata("design:type", String)
    ], CreateAMapQueryParams.prototype, "appToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=constraint" }),
        __metadata("design:type", String)
    ], CreateAMapQueryParams.prototype, "constraint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entity_id" }),
        __metadata("design:type", String)
    ], CreateAMapQueryParams.prototype, "entityId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=variable" }),
        __metadata("design:type", String)
    ], CreateAMapQueryParams.prototype, "variable", void 0);
    return CreateAMapQueryParams;
}(SpeakeasyBase));
export { CreateAMapQueryParams };
var CreateAMapHeaders = /** @class */ (function (_super) {
    __extends(CreateAMapHeaders, _super);
    function CreateAMapHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-App-Token" }),
        __metadata("design:type", String)
    ], CreateAMapHeaders.prototype, "xAppToken", void 0);
    return CreateAMapHeaders;
}(SpeakeasyBase));
export { CreateAMapHeaders };
var CreateAMapRequest = /** @class */ (function (_super) {
    __extends(CreateAMapRequest, _super);
    function CreateAMapRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAMapQueryParams)
    ], CreateAMapRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateAMapHeaders)
    ], CreateAMapRequest.prototype, "headers", void 0);
    return CreateAMapRequest;
}(SpeakeasyBase));
export { CreateAMapRequest };
var CreateAMapResponse = /** @class */ (function (_super) {
    __extends(CreateAMapResponse, _super);
    function CreateAMapResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateAMapResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateAMapResponse.prototype, "statusCode", void 0);
    return CreateAMapResponse;
}(SpeakeasyBase));
export { CreateAMapResponse };
