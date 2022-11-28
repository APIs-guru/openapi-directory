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
var AppendBlockChildrenPathParams = /** @class */ (function (_super) {
    __extends(AppendBlockChildrenPathParams, _super);
    function AppendBlockChildrenPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], AppendBlockChildrenPathParams.prototype, "id", void 0);
    return AppendBlockChildrenPathParams;
}(SpeakeasyBase));
export { AppendBlockChildrenPathParams };
var AppendBlockChildrenRequestBodyChildrenHeading2TextText = /** @class */ (function (_super) {
    __extends(AppendBlockChildrenRequestBodyChildrenHeading2TextText, _super);
    function AppendBlockChildrenRequestBodyChildrenHeading2TextText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], AppendBlockChildrenRequestBodyChildrenHeading2TextText.prototype, "content", void 0);
    return AppendBlockChildrenRequestBodyChildrenHeading2TextText;
}(SpeakeasyBase));
export { AppendBlockChildrenRequestBodyChildrenHeading2TextText };
var AppendBlockChildrenRequestBodyChildrenHeading2Text = /** @class */ (function (_super) {
    __extends(AppendBlockChildrenRequestBodyChildrenHeading2Text, _super);
    function AppendBlockChildrenRequestBodyChildrenHeading2Text() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", AppendBlockChildrenRequestBodyChildrenHeading2TextText)
    ], AppendBlockChildrenRequestBodyChildrenHeading2Text.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AppendBlockChildrenRequestBodyChildrenHeading2Text.prototype, "type", void 0);
    return AppendBlockChildrenRequestBodyChildrenHeading2Text;
}(SpeakeasyBase));
export { AppendBlockChildrenRequestBodyChildrenHeading2Text };
var AppendBlockChildrenRequestBodyChildrenHeading2 = /** @class */ (function (_super) {
    __extends(AppendBlockChildrenRequestBodyChildrenHeading2, _super);
    function AppendBlockChildrenRequestBodyChildrenHeading2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text", elemType: AppendBlockChildrenRequestBodyChildrenHeading2Text }),
        __metadata("design:type", Array)
    ], AppendBlockChildrenRequestBodyChildrenHeading2.prototype, "text", void 0);
    return AppendBlockChildrenRequestBodyChildrenHeading2;
}(SpeakeasyBase));
export { AppendBlockChildrenRequestBodyChildrenHeading2 };
var AppendBlockChildrenRequestBodyChildren = /** @class */ (function (_super) {
    __extends(AppendBlockChildrenRequestBodyChildren, _super);
    function AppendBlockChildrenRequestBodyChildren() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=heading_2" }),
        __metadata("design:type", AppendBlockChildrenRequestBodyChildrenHeading2)
    ], AppendBlockChildrenRequestBodyChildren.prototype, "heading2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=object" }),
        __metadata("design:type", String)
    ], AppendBlockChildrenRequestBodyChildren.prototype, "object", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AppendBlockChildrenRequestBodyChildren.prototype, "type", void 0);
    return AppendBlockChildrenRequestBodyChildren;
}(SpeakeasyBase));
export { AppendBlockChildrenRequestBodyChildren };
var AppendBlockChildrenRequestBody = /** @class */ (function (_super) {
    __extends(AppendBlockChildrenRequestBody, _super);
    function AppendBlockChildrenRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=children", elemType: AppendBlockChildrenRequestBodyChildren }),
        __metadata("design:type", Array)
    ], AppendBlockChildrenRequestBody.prototype, "children", void 0);
    return AppendBlockChildrenRequestBody;
}(SpeakeasyBase));
export { AppendBlockChildrenRequestBody };
var AppendBlockChildren200ApplicationJsonChildPage = /** @class */ (function (_super) {
    __extends(AppendBlockChildren200ApplicationJsonChildPage, _super);
    function AppendBlockChildren200ApplicationJsonChildPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], AppendBlockChildren200ApplicationJsonChildPage.prototype, "title", void 0);
    return AppendBlockChildren200ApplicationJsonChildPage;
}(SpeakeasyBase));
export { AppendBlockChildren200ApplicationJsonChildPage };
var AppendBlockChildren200ApplicationJson = /** @class */ (function (_super) {
    __extends(AppendBlockChildren200ApplicationJson, _super);
    function AppendBlockChildren200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=child_page" }),
        __metadata("design:type", AppendBlockChildren200ApplicationJsonChildPage)
    ], AppendBlockChildren200ApplicationJson.prototype, "childPage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_time" }),
        __metadata("design:type", String)
    ], AppendBlockChildren200ApplicationJson.prototype, "createdTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_children" }),
        __metadata("design:type", Boolean)
    ], AppendBlockChildren200ApplicationJson.prototype, "hasChildren", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AppendBlockChildren200ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_edited_time" }),
        __metadata("design:type", String)
    ], AppendBlockChildren200ApplicationJson.prototype, "lastEditedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=object" }),
        __metadata("design:type", String)
    ], AppendBlockChildren200ApplicationJson.prototype, "object", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], AppendBlockChildren200ApplicationJson.prototype, "type", void 0);
    return AppendBlockChildren200ApplicationJson;
}(SpeakeasyBase));
export { AppendBlockChildren200ApplicationJson };
var AppendBlockChildrenRequest = /** @class */ (function (_super) {
    __extends(AppendBlockChildrenRequest, _super);
    function AppendBlockChildrenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppendBlockChildrenPathParams)
    ], AppendBlockChildrenRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", AppendBlockChildrenRequestBody)
    ], AppendBlockChildrenRequest.prototype, "request", void 0);
    return AppendBlockChildrenRequest;
}(SpeakeasyBase));
export { AppendBlockChildrenRequest };
var AppendBlockChildrenResponse = /** @class */ (function (_super) {
    __extends(AppendBlockChildrenResponse, _super);
    function AppendBlockChildrenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AppendBlockChildrenResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], AppendBlockChildrenResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AppendBlockChildrenResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AppendBlockChildren200ApplicationJson)
    ], AppendBlockChildrenResponse.prototype, "appendBlockChildren200ApplicationJsonObject", void 0);
    return AppendBlockChildrenResponse;
}(SpeakeasyBase));
export { AppendBlockChildrenResponse };
