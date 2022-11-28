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
var GetImagesQueryParams = /** @class */ (function (_super) {
    __extends(GetImagesQueryParams, _super);
    function GetImagesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetImagesQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetImagesQueryParams.prototype, "pageSize", void 0);
    return GetImagesQueryParams;
}(SpeakeasyBase));
export { GetImagesQueryParams };
var GetImages200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetImages200ApplicationJson, _super);
    function GetImages200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.ImagePublic }),
        __metadata("design:type", Array)
    ], GetImages200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetImages200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], GetImages200ApplicationJson.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", Number)
    ], GetImages200ApplicationJson.prototype, "results", void 0);
    return GetImages200ApplicationJson;
}(SpeakeasyBase));
export { GetImages200ApplicationJson };
var GetImagesDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetImagesDefaultApplicationJson, _super);
    function GetImagesDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetImagesDefaultApplicationJson.prototype, "errors", void 0);
    return GetImagesDefaultApplicationJson;
}(SpeakeasyBase));
export { GetImagesDefaultApplicationJson };
var GetImagesRequest = /** @class */ (function (_super) {
    __extends(GetImagesRequest, _super);
    function GetImagesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetImagesQueryParams)
    ], GetImagesRequest.prototype, "queryParams", void 0);
    return GetImagesRequest;
}(SpeakeasyBase));
export { GetImagesRequest };
var GetImagesResponse = /** @class */ (function (_super) {
    __extends(GetImagesResponse, _super);
    function GetImagesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetImagesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetImagesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetImages200ApplicationJson)
    ], GetImagesResponse.prototype, "getImages200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetImagesDefaultApplicationJson)
    ], GetImagesResponse.prototype, "getImagesDefaultApplicationJsonObject", void 0);
    return GetImagesResponse;
}(SpeakeasyBase));
export { GetImagesResponse };
