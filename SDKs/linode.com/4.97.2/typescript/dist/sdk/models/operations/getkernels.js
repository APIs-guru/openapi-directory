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
var GetKernelsQueryParams = /** @class */ (function (_super) {
    __extends(GetKernelsQueryParams, _super);
    function GetKernelsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetKernelsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetKernelsQueryParams.prototype, "pageSize", void 0);
    return GetKernelsQueryParams;
}(SpeakeasyBase));
export { GetKernelsQueryParams };
var GetKernels200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetKernels200ApplicationJson, _super);
    function GetKernels200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.Kernel }),
        __metadata("design:type", Array)
    ], GetKernels200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetKernels200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], GetKernels200ApplicationJson.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", Number)
    ], GetKernels200ApplicationJson.prototype, "results", void 0);
    return GetKernels200ApplicationJson;
}(SpeakeasyBase));
export { GetKernels200ApplicationJson };
var GetKernelsDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetKernelsDefaultApplicationJson, _super);
    function GetKernelsDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetKernelsDefaultApplicationJson.prototype, "errors", void 0);
    return GetKernelsDefaultApplicationJson;
}(SpeakeasyBase));
export { GetKernelsDefaultApplicationJson };
var GetKernelsRequest = /** @class */ (function (_super) {
    __extends(GetKernelsRequest, _super);
    function GetKernelsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetKernelsQueryParams)
    ], GetKernelsRequest.prototype, "queryParams", void 0);
    return GetKernelsRequest;
}(SpeakeasyBase));
export { GetKernelsRequest };
var GetKernelsResponse = /** @class */ (function (_super) {
    __extends(GetKernelsResponse, _super);
    function GetKernelsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetKernelsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetKernelsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetKernels200ApplicationJson)
    ], GetKernelsResponse.prototype, "getKernels200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetKernelsDefaultApplicationJson)
    ], GetKernelsResponse.prototype, "getKernelsDefaultApplicationJsonObject", void 0);
    return GetKernelsResponse;
}(SpeakeasyBase));
export { GetKernelsResponse };
