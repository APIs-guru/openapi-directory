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
var SetItemImageByIndexPathParams = /** @class */ (function (_super) {
    __extends(SetItemImageByIndexPathParams, _super);
    function SetItemImageByIndexPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=imageIndex" }),
        __metadata("design:type", Number)
    ], SetItemImageByIndexPathParams.prototype, "imageIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=imageType" }),
        __metadata("design:type", String)
    ], SetItemImageByIndexPathParams.prototype, "imageType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=itemId" }),
        __metadata("design:type", String)
    ], SetItemImageByIndexPathParams.prototype, "itemId", void 0);
    return SetItemImageByIndexPathParams;
}(SpeakeasyBase));
export { SetItemImageByIndexPathParams };
var SetItemImageByIndexSecurity = /** @class */ (function (_super) {
    __extends(SetItemImageByIndexSecurity, _super);
    function SetItemImageByIndexSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], SetItemImageByIndexSecurity.prototype, "customAuthentication", void 0);
    return SetItemImageByIndexSecurity;
}(SpeakeasyBase));
export { SetItemImageByIndexSecurity };
var SetItemImageByIndexRequest = /** @class */ (function (_super) {
    __extends(SetItemImageByIndexRequest, _super);
    function SetItemImageByIndexRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetItemImageByIndexPathParams)
    ], SetItemImageByIndexRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SetItemImageByIndexSecurity)
    ], SetItemImageByIndexRequest.prototype, "security", void 0);
    return SetItemImageByIndexRequest;
}(SpeakeasyBase));
export { SetItemImageByIndexRequest };
var SetItemImageByIndexResponse = /** @class */ (function (_super) {
    __extends(SetItemImageByIndexResponse, _super);
    function SetItemImageByIndexResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SetItemImageByIndexResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], SetItemImageByIndexResponse.prototype, "problemDetails", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SetItemImageByIndexResponse.prototype, "statusCode", void 0);
    return SetItemImageByIndexResponse;
}(SpeakeasyBase));
export { SetItemImageByIndexResponse };
