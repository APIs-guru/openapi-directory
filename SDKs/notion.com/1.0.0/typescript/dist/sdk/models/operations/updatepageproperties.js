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
var UpdatePagePropertiesPathParams = /** @class */ (function (_super) {
    __extends(UpdatePagePropertiesPathParams, _super);
    function UpdatePagePropertiesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], UpdatePagePropertiesPathParams.prototype, "id", void 0);
    return UpdatePagePropertiesPathParams;
}(SpeakeasyBase));
export { UpdatePagePropertiesPathParams };
var UpdatePagePropertiesRequestBodyPropertiesStatusSelect = /** @class */ (function (_super) {
    __extends(UpdatePagePropertiesRequestBodyPropertiesStatusSelect, _super);
    function UpdatePagePropertiesRequestBodyPropertiesStatusSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdatePagePropertiesRequestBodyPropertiesStatusSelect.prototype, "name", void 0);
    return UpdatePagePropertiesRequestBodyPropertiesStatusSelect;
}(SpeakeasyBase));
export { UpdatePagePropertiesRequestBodyPropertiesStatusSelect };
var UpdatePagePropertiesRequestBodyPropertiesStatus = /** @class */ (function (_super) {
    __extends(UpdatePagePropertiesRequestBodyPropertiesStatus, _super);
    function UpdatePagePropertiesRequestBodyPropertiesStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=select" }),
        __metadata("design:type", UpdatePagePropertiesRequestBodyPropertiesStatusSelect)
    ], UpdatePagePropertiesRequestBodyPropertiesStatus.prototype, "select", void 0);
    return UpdatePagePropertiesRequestBodyPropertiesStatus;
}(SpeakeasyBase));
export { UpdatePagePropertiesRequestBodyPropertiesStatus };
var UpdatePagePropertiesRequestBodyProperties = /** @class */ (function (_super) {
    __extends(UpdatePagePropertiesRequestBodyProperties, _super);
    function UpdatePagePropertiesRequestBodyProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", UpdatePagePropertiesRequestBodyPropertiesStatus)
    ], UpdatePagePropertiesRequestBodyProperties.prototype, "status", void 0);
    return UpdatePagePropertiesRequestBodyProperties;
}(SpeakeasyBase));
export { UpdatePagePropertiesRequestBodyProperties };
var UpdatePagePropertiesRequestBody = /** @class */ (function (_super) {
    __extends(UpdatePagePropertiesRequestBody, _super);
    function UpdatePagePropertiesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties" }),
        __metadata("design:type", UpdatePagePropertiesRequestBodyProperties)
    ], UpdatePagePropertiesRequestBody.prototype, "properties", void 0);
    return UpdatePagePropertiesRequestBody;
}(SpeakeasyBase));
export { UpdatePagePropertiesRequestBody };
var UpdatePageProperties200ApplicationJsonParent = /** @class */ (function (_super) {
    __extends(UpdatePageProperties200ApplicationJsonParent, _super);
    function UpdatePageProperties200ApplicationJsonParent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=database_id" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonParent.prototype, "databaseId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonParent.prototype, "type", void 0);
    return UpdatePageProperties200ApplicationJsonParent;
}(SpeakeasyBase));
export { UpdatePageProperties200ApplicationJsonParent };
var UpdatePageProperties200ApplicationJsonPropertiesAuthorMultiSelect = /** @class */ (function (_super) {
    __extends(UpdatePageProperties200ApplicationJsonPropertiesAuthorMultiSelect, _super);
    function UpdatePageProperties200ApplicationJsonPropertiesAuthorMultiSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonPropertiesAuthorMultiSelect.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonPropertiesAuthorMultiSelect.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonPropertiesAuthorMultiSelect.prototype, "name", void 0);
    return UpdatePageProperties200ApplicationJsonPropertiesAuthorMultiSelect;
}(SpeakeasyBase));
export { UpdatePageProperties200ApplicationJsonPropertiesAuthorMultiSelect };
var UpdatePageProperties200ApplicationJsonPropertiesAuthor = /** @class */ (function (_super) {
    __extends(UpdatePageProperties200ApplicationJsonPropertiesAuthor, _super);
    function UpdatePageProperties200ApplicationJsonPropertiesAuthor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonPropertiesAuthor.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=multi_select", elemType: UpdatePageProperties200ApplicationJsonPropertiesAuthorMultiSelect }),
        __metadata("design:type", Array)
    ], UpdatePageProperties200ApplicationJsonPropertiesAuthor.prototype, "multiSelect", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonPropertiesAuthor.prototype, "type", void 0);
    return UpdatePageProperties200ApplicationJsonPropertiesAuthor;
}(SpeakeasyBase));
export { UpdatePageProperties200ApplicationJsonPropertiesAuthor };
var UpdatePageProperties200ApplicationJsonPropertiesLink = /** @class */ (function (_super) {
    __extends(UpdatePageProperties200ApplicationJsonPropertiesLink, _super);
    function UpdatePageProperties200ApplicationJsonPropertiesLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonPropertiesLink.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonPropertiesLink.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonPropertiesLink.prototype, "url", void 0);
    return UpdatePageProperties200ApplicationJsonPropertiesLink;
}(SpeakeasyBase));
export { UpdatePageProperties200ApplicationJsonPropertiesLink };
var UpdatePageProperties200ApplicationJsonPropertiesNameTitleAnnotations = /** @class */ (function (_super) {
    __extends(UpdatePageProperties200ApplicationJsonPropertiesNameTitleAnnotations, _super);
    function UpdatePageProperties200ApplicationJsonPropertiesNameTitleAnnotations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bold" }),
        __metadata("design:type", Boolean)
    ], UpdatePageProperties200ApplicationJsonPropertiesNameTitleAnnotations.prototype, "bold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Boolean)
    ], UpdatePageProperties200ApplicationJsonPropertiesNameTitleAnnotations.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonPropertiesNameTitleAnnotations.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=italic" }),
        __metadata("design:type", Boolean)
    ], UpdatePageProperties200ApplicationJsonPropertiesNameTitleAnnotations.prototype, "italic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=strikethrough" }),
        __metadata("design:type", Boolean)
    ], UpdatePageProperties200ApplicationJsonPropertiesNameTitleAnnotations.prototype, "strikethrough", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=underline" }),
        __metadata("design:type", Boolean)
    ], UpdatePageProperties200ApplicationJsonPropertiesNameTitleAnnotations.prototype, "underline", void 0);
    return UpdatePageProperties200ApplicationJsonPropertiesNameTitleAnnotations;
}(SpeakeasyBase));
export { UpdatePageProperties200ApplicationJsonPropertiesNameTitleAnnotations };
var UpdatePageProperties200ApplicationJsonPropertiesNameTitleText = /** @class */ (function (_super) {
    __extends(UpdatePageProperties200ApplicationJsonPropertiesNameTitleText, _super);
    function UpdatePageProperties200ApplicationJsonPropertiesNameTitleText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonPropertiesNameTitleText.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", Object)
    ], UpdatePageProperties200ApplicationJsonPropertiesNameTitleText.prototype, "link", void 0);
    return UpdatePageProperties200ApplicationJsonPropertiesNameTitleText;
}(SpeakeasyBase));
export { UpdatePageProperties200ApplicationJsonPropertiesNameTitleText };
var UpdatePageProperties200ApplicationJsonPropertiesNameTitle = /** @class */ (function (_super) {
    __extends(UpdatePageProperties200ApplicationJsonPropertiesNameTitle, _super);
    function UpdatePageProperties200ApplicationJsonPropertiesNameTitle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotations" }),
        __metadata("design:type", UpdatePageProperties200ApplicationJsonPropertiesNameTitleAnnotations)
    ], UpdatePageProperties200ApplicationJsonPropertiesNameTitle.prototype, "annotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", Object)
    ], UpdatePageProperties200ApplicationJsonPropertiesNameTitle.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=plain_text" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonPropertiesNameTitle.prototype, "plainText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", UpdatePageProperties200ApplicationJsonPropertiesNameTitleText)
    ], UpdatePageProperties200ApplicationJsonPropertiesNameTitle.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonPropertiesNameTitle.prototype, "type", void 0);
    return UpdatePageProperties200ApplicationJsonPropertiesNameTitle;
}(SpeakeasyBase));
export { UpdatePageProperties200ApplicationJsonPropertiesNameTitle };
var UpdatePageProperties200ApplicationJsonPropertiesName = /** @class */ (function (_super) {
    __extends(UpdatePageProperties200ApplicationJsonPropertiesName, _super);
    function UpdatePageProperties200ApplicationJsonPropertiesName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonPropertiesName.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title", elemType: UpdatePageProperties200ApplicationJsonPropertiesNameTitle }),
        __metadata("design:type", Array)
    ], UpdatePageProperties200ApplicationJsonPropertiesName.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonPropertiesName.prototype, "type", void 0);
    return UpdatePageProperties200ApplicationJsonPropertiesName;
}(SpeakeasyBase));
export { UpdatePageProperties200ApplicationJsonPropertiesName };
var UpdatePageProperties200ApplicationJsonPropertiesPublisherSelect = /** @class */ (function (_super) {
    __extends(UpdatePageProperties200ApplicationJsonPropertiesPublisherSelect, _super);
    function UpdatePageProperties200ApplicationJsonPropertiesPublisherSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonPropertiesPublisherSelect.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonPropertiesPublisherSelect.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonPropertiesPublisherSelect.prototype, "name", void 0);
    return UpdatePageProperties200ApplicationJsonPropertiesPublisherSelect;
}(SpeakeasyBase));
export { UpdatePageProperties200ApplicationJsonPropertiesPublisherSelect };
var UpdatePageProperties200ApplicationJsonPropertiesPublisher = /** @class */ (function (_super) {
    __extends(UpdatePageProperties200ApplicationJsonPropertiesPublisher, _super);
    function UpdatePageProperties200ApplicationJsonPropertiesPublisher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonPropertiesPublisher.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=select" }),
        __metadata("design:type", UpdatePageProperties200ApplicationJsonPropertiesPublisherSelect)
    ], UpdatePageProperties200ApplicationJsonPropertiesPublisher.prototype, "select", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonPropertiesPublisher.prototype, "type", void 0);
    return UpdatePageProperties200ApplicationJsonPropertiesPublisher;
}(SpeakeasyBase));
export { UpdatePageProperties200ApplicationJsonPropertiesPublisher };
var UpdatePageProperties200ApplicationJsonPropertiesPublishingReleaseDateDate = /** @class */ (function (_super) {
    __extends(UpdatePageProperties200ApplicationJsonPropertiesPublishingReleaseDateDate, _super);
    function UpdatePageProperties200ApplicationJsonPropertiesPublishingReleaseDateDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end" }),
        __metadata("design:type", Object)
    ], UpdatePageProperties200ApplicationJsonPropertiesPublishingReleaseDateDate.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonPropertiesPublishingReleaseDateDate.prototype, "start", void 0);
    return UpdatePageProperties200ApplicationJsonPropertiesPublishingReleaseDateDate;
}(SpeakeasyBase));
export { UpdatePageProperties200ApplicationJsonPropertiesPublishingReleaseDateDate };
var UpdatePageProperties200ApplicationJsonPropertiesPublishingReleaseDate = /** @class */ (function (_super) {
    __extends(UpdatePageProperties200ApplicationJsonPropertiesPublishingReleaseDate, _super);
    function UpdatePageProperties200ApplicationJsonPropertiesPublishingReleaseDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", UpdatePageProperties200ApplicationJsonPropertiesPublishingReleaseDateDate)
    ], UpdatePageProperties200ApplicationJsonPropertiesPublishingReleaseDate.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonPropertiesPublishingReleaseDate.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonPropertiesPublishingReleaseDate.prototype, "type", void 0);
    return UpdatePageProperties200ApplicationJsonPropertiesPublishingReleaseDate;
}(SpeakeasyBase));
export { UpdatePageProperties200ApplicationJsonPropertiesPublishingReleaseDate };
var UpdatePageProperties200ApplicationJsonPropertiesRead = /** @class */ (function (_super) {
    __extends(UpdatePageProperties200ApplicationJsonPropertiesRead, _super);
    function UpdatePageProperties200ApplicationJsonPropertiesRead() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=checkbox" }),
        __metadata("design:type", Boolean)
    ], UpdatePageProperties200ApplicationJsonPropertiesRead.prototype, "checkbox", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonPropertiesRead.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonPropertiesRead.prototype, "type", void 0);
    return UpdatePageProperties200ApplicationJsonPropertiesRead;
}(SpeakeasyBase));
export { UpdatePageProperties200ApplicationJsonPropertiesRead };
var UpdatePageProperties200ApplicationJsonPropertiesScore5Select = /** @class */ (function (_super) {
    __extends(UpdatePageProperties200ApplicationJsonPropertiesScore5Select, _super);
    function UpdatePageProperties200ApplicationJsonPropertiesScore5Select() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonPropertiesScore5Select.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonPropertiesScore5Select.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonPropertiesScore5Select.prototype, "name", void 0);
    return UpdatePageProperties200ApplicationJsonPropertiesScore5Select;
}(SpeakeasyBase));
export { UpdatePageProperties200ApplicationJsonPropertiesScore5Select };
var UpdatePageProperties200ApplicationJsonPropertiesScore5 = /** @class */ (function (_super) {
    __extends(UpdatePageProperties200ApplicationJsonPropertiesScore5, _super);
    function UpdatePageProperties200ApplicationJsonPropertiesScore5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonPropertiesScore5.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=select" }),
        __metadata("design:type", UpdatePageProperties200ApplicationJsonPropertiesScore5Select)
    ], UpdatePageProperties200ApplicationJsonPropertiesScore5.prototype, "select", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonPropertiesScore5.prototype, "type", void 0);
    return UpdatePageProperties200ApplicationJsonPropertiesScore5;
}(SpeakeasyBase));
export { UpdatePageProperties200ApplicationJsonPropertiesScore5 };
var UpdatePageProperties200ApplicationJsonPropertiesStatusSelect = /** @class */ (function (_super) {
    __extends(UpdatePageProperties200ApplicationJsonPropertiesStatusSelect, _super);
    function UpdatePageProperties200ApplicationJsonPropertiesStatusSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonPropertiesStatusSelect.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonPropertiesStatusSelect.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonPropertiesStatusSelect.prototype, "name", void 0);
    return UpdatePageProperties200ApplicationJsonPropertiesStatusSelect;
}(SpeakeasyBase));
export { UpdatePageProperties200ApplicationJsonPropertiesStatusSelect };
var UpdatePageProperties200ApplicationJsonPropertiesStatus = /** @class */ (function (_super) {
    __extends(UpdatePageProperties200ApplicationJsonPropertiesStatus, _super);
    function UpdatePageProperties200ApplicationJsonPropertiesStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonPropertiesStatus.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=select" }),
        __metadata("design:type", UpdatePageProperties200ApplicationJsonPropertiesStatusSelect)
    ], UpdatePageProperties200ApplicationJsonPropertiesStatus.prototype, "select", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonPropertiesStatus.prototype, "type", void 0);
    return UpdatePageProperties200ApplicationJsonPropertiesStatus;
}(SpeakeasyBase));
export { UpdatePageProperties200ApplicationJsonPropertiesStatus };
var UpdatePageProperties200ApplicationJsonPropertiesSummaryRichTextAnnotations = /** @class */ (function (_super) {
    __extends(UpdatePageProperties200ApplicationJsonPropertiesSummaryRichTextAnnotations, _super);
    function UpdatePageProperties200ApplicationJsonPropertiesSummaryRichTextAnnotations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bold" }),
        __metadata("design:type", Boolean)
    ], UpdatePageProperties200ApplicationJsonPropertiesSummaryRichTextAnnotations.prototype, "bold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Boolean)
    ], UpdatePageProperties200ApplicationJsonPropertiesSummaryRichTextAnnotations.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonPropertiesSummaryRichTextAnnotations.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=italic" }),
        __metadata("design:type", Boolean)
    ], UpdatePageProperties200ApplicationJsonPropertiesSummaryRichTextAnnotations.prototype, "italic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=strikethrough" }),
        __metadata("design:type", Boolean)
    ], UpdatePageProperties200ApplicationJsonPropertiesSummaryRichTextAnnotations.prototype, "strikethrough", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=underline" }),
        __metadata("design:type", Boolean)
    ], UpdatePageProperties200ApplicationJsonPropertiesSummaryRichTextAnnotations.prototype, "underline", void 0);
    return UpdatePageProperties200ApplicationJsonPropertiesSummaryRichTextAnnotations;
}(SpeakeasyBase));
export { UpdatePageProperties200ApplicationJsonPropertiesSummaryRichTextAnnotations };
var UpdatePageProperties200ApplicationJsonPropertiesSummaryRichTextText = /** @class */ (function (_super) {
    __extends(UpdatePageProperties200ApplicationJsonPropertiesSummaryRichTextText, _super);
    function UpdatePageProperties200ApplicationJsonPropertiesSummaryRichTextText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonPropertiesSummaryRichTextText.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", Object)
    ], UpdatePageProperties200ApplicationJsonPropertiesSummaryRichTextText.prototype, "link", void 0);
    return UpdatePageProperties200ApplicationJsonPropertiesSummaryRichTextText;
}(SpeakeasyBase));
export { UpdatePageProperties200ApplicationJsonPropertiesSummaryRichTextText };
var UpdatePageProperties200ApplicationJsonPropertiesSummaryRichText = /** @class */ (function (_super) {
    __extends(UpdatePageProperties200ApplicationJsonPropertiesSummaryRichText, _super);
    function UpdatePageProperties200ApplicationJsonPropertiesSummaryRichText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotations" }),
        __metadata("design:type", UpdatePageProperties200ApplicationJsonPropertiesSummaryRichTextAnnotations)
    ], UpdatePageProperties200ApplicationJsonPropertiesSummaryRichText.prototype, "annotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", Object)
    ], UpdatePageProperties200ApplicationJsonPropertiesSummaryRichText.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=plain_text" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonPropertiesSummaryRichText.prototype, "plainText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", UpdatePageProperties200ApplicationJsonPropertiesSummaryRichTextText)
    ], UpdatePageProperties200ApplicationJsonPropertiesSummaryRichText.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonPropertiesSummaryRichText.prototype, "type", void 0);
    return UpdatePageProperties200ApplicationJsonPropertiesSummaryRichText;
}(SpeakeasyBase));
export { UpdatePageProperties200ApplicationJsonPropertiesSummaryRichText };
var UpdatePageProperties200ApplicationJsonPropertiesSummary = /** @class */ (function (_super) {
    __extends(UpdatePageProperties200ApplicationJsonPropertiesSummary, _super);
    function UpdatePageProperties200ApplicationJsonPropertiesSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonPropertiesSummary.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rich_text", elemType: UpdatePageProperties200ApplicationJsonPropertiesSummaryRichText }),
        __metadata("design:type", Array)
    ], UpdatePageProperties200ApplicationJsonPropertiesSummary.prototype, "richText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonPropertiesSummary.prototype, "type", void 0);
    return UpdatePageProperties200ApplicationJsonPropertiesSummary;
}(SpeakeasyBase));
export { UpdatePageProperties200ApplicationJsonPropertiesSummary };
var UpdatePageProperties200ApplicationJsonPropertiesTypeSelect = /** @class */ (function (_super) {
    __extends(UpdatePageProperties200ApplicationJsonPropertiesTypeSelect, _super);
    function UpdatePageProperties200ApplicationJsonPropertiesTypeSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonPropertiesTypeSelect.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonPropertiesTypeSelect.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonPropertiesTypeSelect.prototype, "name", void 0);
    return UpdatePageProperties200ApplicationJsonPropertiesTypeSelect;
}(SpeakeasyBase));
export { UpdatePageProperties200ApplicationJsonPropertiesTypeSelect };
var UpdatePageProperties200ApplicationJsonPropertiesType = /** @class */ (function (_super) {
    __extends(UpdatePageProperties200ApplicationJsonPropertiesType, _super);
    function UpdatePageProperties200ApplicationJsonPropertiesType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonPropertiesType.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=select" }),
        __metadata("design:type", UpdatePageProperties200ApplicationJsonPropertiesTypeSelect)
    ], UpdatePageProperties200ApplicationJsonPropertiesType.prototype, "select", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJsonPropertiesType.prototype, "type", void 0);
    return UpdatePageProperties200ApplicationJsonPropertiesType;
}(SpeakeasyBase));
export { UpdatePageProperties200ApplicationJsonPropertiesType };
var UpdatePageProperties200ApplicationJsonProperties = /** @class */ (function (_super) {
    __extends(UpdatePageProperties200ApplicationJsonProperties, _super);
    function UpdatePageProperties200ApplicationJsonProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Author" }),
        __metadata("design:type", UpdatePageProperties200ApplicationJsonPropertiesAuthor)
    ], UpdatePageProperties200ApplicationJsonProperties.prototype, "author", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Link" }),
        __metadata("design:type", UpdatePageProperties200ApplicationJsonPropertiesLink)
    ], UpdatePageProperties200ApplicationJsonProperties.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", UpdatePageProperties200ApplicationJsonPropertiesName)
    ], UpdatePageProperties200ApplicationJsonProperties.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Publisher" }),
        __metadata("design:type", UpdatePageProperties200ApplicationJsonPropertiesPublisher)
    ], UpdatePageProperties200ApplicationJsonProperties.prototype, "publisher", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Publishing/Release Date" }),
        __metadata("design:type", UpdatePageProperties200ApplicationJsonPropertiesPublishingReleaseDate)
    ], UpdatePageProperties200ApplicationJsonProperties.prototype, "publishingReleaseDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Read" }),
        __metadata("design:type", UpdatePageProperties200ApplicationJsonPropertiesRead)
    ], UpdatePageProperties200ApplicationJsonProperties.prototype, "read", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Score /5" }),
        __metadata("design:type", UpdatePageProperties200ApplicationJsonPropertiesScore5)
    ], UpdatePageProperties200ApplicationJsonProperties.prototype, "score5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", UpdatePageProperties200ApplicationJsonPropertiesStatus)
    ], UpdatePageProperties200ApplicationJsonProperties.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Summary" }),
        __metadata("design:type", UpdatePageProperties200ApplicationJsonPropertiesSummary)
    ], UpdatePageProperties200ApplicationJsonProperties.prototype, "summary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", UpdatePageProperties200ApplicationJsonPropertiesType)
    ], UpdatePageProperties200ApplicationJsonProperties.prototype, "type", void 0);
    return UpdatePageProperties200ApplicationJsonProperties;
}(SpeakeasyBase));
export { UpdatePageProperties200ApplicationJsonProperties };
var UpdatePageProperties200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdatePageProperties200ApplicationJson, _super);
    function UpdatePageProperties200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], UpdatePageProperties200ApplicationJson.prototype, "archived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_time" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJson.prototype, "createdTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_edited_time" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJson.prototype, "lastEditedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=object" }),
        __metadata("design:type", String)
    ], UpdatePageProperties200ApplicationJson.prototype, "object", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent" }),
        __metadata("design:type", UpdatePageProperties200ApplicationJsonParent)
    ], UpdatePageProperties200ApplicationJson.prototype, "parent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties" }),
        __metadata("design:type", UpdatePageProperties200ApplicationJsonProperties)
    ], UpdatePageProperties200ApplicationJson.prototype, "properties", void 0);
    return UpdatePageProperties200ApplicationJson;
}(SpeakeasyBase));
export { UpdatePageProperties200ApplicationJson };
var UpdatePagePropertiesRequest = /** @class */ (function (_super) {
    __extends(UpdatePagePropertiesRequest, _super);
    function UpdatePagePropertiesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdatePagePropertiesPathParams)
    ], UpdatePagePropertiesRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdatePagePropertiesRequestBody)
    ], UpdatePagePropertiesRequest.prototype, "request", void 0);
    return UpdatePagePropertiesRequest;
}(SpeakeasyBase));
export { UpdatePagePropertiesRequest };
var UpdatePagePropertiesResponse = /** @class */ (function (_super) {
    __extends(UpdatePagePropertiesResponse, _super);
    function UpdatePagePropertiesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdatePagePropertiesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdatePagePropertiesResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdatePagePropertiesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdatePageProperties200ApplicationJson)
    ], UpdatePagePropertiesResponse.prototype, "updatePageProperties200ApplicationJsonObject", void 0);
    return UpdatePagePropertiesResponse;
}(SpeakeasyBase));
export { UpdatePagePropertiesResponse };
