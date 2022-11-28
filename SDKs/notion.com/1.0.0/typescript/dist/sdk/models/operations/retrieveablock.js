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
var RetrieveABlockPathParams = /** @class */ (function (_super) {
    __extends(RetrieveABlockPathParams, _super);
    function RetrieveABlockPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], RetrieveABlockPathParams.prototype, "id", void 0);
    return RetrieveABlockPathParams;
}(SpeakeasyBase));
export { RetrieveABlockPathParams };
var RetrieveABlock200ApplicationJsonParagraphTextAnnotations = /** @class */ (function (_super) {
    __extends(RetrieveABlock200ApplicationJsonParagraphTextAnnotations, _super);
    function RetrieveABlock200ApplicationJsonParagraphTextAnnotations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bold" }),
        __metadata("design:type", Boolean)
    ], RetrieveABlock200ApplicationJsonParagraphTextAnnotations.prototype, "bold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Boolean)
    ], RetrieveABlock200ApplicationJsonParagraphTextAnnotations.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], RetrieveABlock200ApplicationJsonParagraphTextAnnotations.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=italic" }),
        __metadata("design:type", Boolean)
    ], RetrieveABlock200ApplicationJsonParagraphTextAnnotations.prototype, "italic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=strikethrough" }),
        __metadata("design:type", Boolean)
    ], RetrieveABlock200ApplicationJsonParagraphTextAnnotations.prototype, "strikethrough", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=underline" }),
        __metadata("design:type", Boolean)
    ], RetrieveABlock200ApplicationJsonParagraphTextAnnotations.prototype, "underline", void 0);
    return RetrieveABlock200ApplicationJsonParagraphTextAnnotations;
}(SpeakeasyBase));
export { RetrieveABlock200ApplicationJsonParagraphTextAnnotations };
var RetrieveABlock200ApplicationJsonParagraphTextText = /** @class */ (function (_super) {
    __extends(RetrieveABlock200ApplicationJsonParagraphTextText, _super);
    function RetrieveABlock200ApplicationJsonParagraphTextText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], RetrieveABlock200ApplicationJsonParagraphTextText.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", Object)
    ], RetrieveABlock200ApplicationJsonParagraphTextText.prototype, "link", void 0);
    return RetrieveABlock200ApplicationJsonParagraphTextText;
}(SpeakeasyBase));
export { RetrieveABlock200ApplicationJsonParagraphTextText };
var RetrieveABlock200ApplicationJsonParagraphText = /** @class */ (function (_super) {
    __extends(RetrieveABlock200ApplicationJsonParagraphText, _super);
    function RetrieveABlock200ApplicationJsonParagraphText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotations" }),
        __metadata("design:type", RetrieveABlock200ApplicationJsonParagraphTextAnnotations)
    ], RetrieveABlock200ApplicationJsonParagraphText.prototype, "annotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", Object)
    ], RetrieveABlock200ApplicationJsonParagraphText.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=plain_text" }),
        __metadata("design:type", String)
    ], RetrieveABlock200ApplicationJsonParagraphText.prototype, "plainText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", RetrieveABlock200ApplicationJsonParagraphTextText)
    ], RetrieveABlock200ApplicationJsonParagraphText.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RetrieveABlock200ApplicationJsonParagraphText.prototype, "type", void 0);
    return RetrieveABlock200ApplicationJsonParagraphText;
}(SpeakeasyBase));
export { RetrieveABlock200ApplicationJsonParagraphText };
var RetrieveABlock200ApplicationJsonParagraph = /** @class */ (function (_super) {
    __extends(RetrieveABlock200ApplicationJsonParagraph, _super);
    function RetrieveABlock200ApplicationJsonParagraph() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text", elemType: RetrieveABlock200ApplicationJsonParagraphText }),
        __metadata("design:type", Array)
    ], RetrieveABlock200ApplicationJsonParagraph.prototype, "text", void 0);
    return RetrieveABlock200ApplicationJsonParagraph;
}(SpeakeasyBase));
export { RetrieveABlock200ApplicationJsonParagraph };
var RetrieveABlock200ApplicationJson = /** @class */ (function (_super) {
    __extends(RetrieveABlock200ApplicationJson, _super);
    function RetrieveABlock200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_time" }),
        __metadata("design:type", String)
    ], RetrieveABlock200ApplicationJson.prototype, "createdTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_children" }),
        __metadata("design:type", Boolean)
    ], RetrieveABlock200ApplicationJson.prototype, "hasChildren", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RetrieveABlock200ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_edited_time" }),
        __metadata("design:type", String)
    ], RetrieveABlock200ApplicationJson.prototype, "lastEditedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=object" }),
        __metadata("design:type", String)
    ], RetrieveABlock200ApplicationJson.prototype, "object", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=paragraph" }),
        __metadata("design:type", RetrieveABlock200ApplicationJsonParagraph)
    ], RetrieveABlock200ApplicationJson.prototype, "paragraph", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RetrieveABlock200ApplicationJson.prototype, "type", void 0);
    return RetrieveABlock200ApplicationJson;
}(SpeakeasyBase));
export { RetrieveABlock200ApplicationJson };
var RetrieveABlockRequest = /** @class */ (function (_super) {
    __extends(RetrieveABlockRequest, _super);
    function RetrieveABlockRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetrieveABlockPathParams)
    ], RetrieveABlockRequest.prototype, "pathParams", void 0);
    return RetrieveABlockRequest;
}(SpeakeasyBase));
export { RetrieveABlockRequest };
var RetrieveABlockResponse = /** @class */ (function (_super) {
    __extends(RetrieveABlockResponse, _super);
    function RetrieveABlockResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RetrieveABlockResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], RetrieveABlockResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RetrieveABlockResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetrieveABlock200ApplicationJson)
    ], RetrieveABlockResponse.prototype, "retrieveABlock200ApplicationJsonObject", void 0);
    return RetrieveABlockResponse;
}(SpeakeasyBase));
export { RetrieveABlockResponse };
