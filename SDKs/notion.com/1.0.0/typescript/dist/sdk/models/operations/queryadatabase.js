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
var QueryADatabasePathParams = /** @class */ (function (_super) {
    __extends(QueryADatabasePathParams, _super);
    function QueryADatabasePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], QueryADatabasePathParams.prototype, "id", void 0);
    return QueryADatabasePathParams;
}(SpeakeasyBase));
export { QueryADatabasePathParams };
var QueryADatabaseRequestBodyFilterOrSelect = /** @class */ (function (_super) {
    __extends(QueryADatabaseRequestBodyFilterOrSelect, _super);
    function QueryADatabaseRequestBodyFilterOrSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=equals" }),
        __metadata("design:type", String)
    ], QueryADatabaseRequestBodyFilterOrSelect.prototype, "equals", void 0);
    return QueryADatabaseRequestBodyFilterOrSelect;
}(SpeakeasyBase));
export { QueryADatabaseRequestBodyFilterOrSelect };
var QueryADatabaseRequestBodyFilterOr = /** @class */ (function (_super) {
    __extends(QueryADatabaseRequestBodyFilterOr, _super);
    function QueryADatabaseRequestBodyFilterOr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=property" }),
        __metadata("design:type", String)
    ], QueryADatabaseRequestBodyFilterOr.prototype, "property", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=select" }),
        __metadata("design:type", QueryADatabaseRequestBodyFilterOrSelect)
    ], QueryADatabaseRequestBodyFilterOr.prototype, "select", void 0);
    return QueryADatabaseRequestBodyFilterOr;
}(SpeakeasyBase));
export { QueryADatabaseRequestBodyFilterOr };
var QueryADatabaseRequestBodyFilter = /** @class */ (function (_super) {
    __extends(QueryADatabaseRequestBodyFilter, _super);
    function QueryADatabaseRequestBodyFilter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=or", elemType: QueryADatabaseRequestBodyFilterOr }),
        __metadata("design:type", Array)
    ], QueryADatabaseRequestBodyFilter.prototype, "or", void 0);
    return QueryADatabaseRequestBodyFilter;
}(SpeakeasyBase));
export { QueryADatabaseRequestBodyFilter };
var QueryADatabaseRequestBodySorts = /** @class */ (function (_super) {
    __extends(QueryADatabaseRequestBodySorts, _super);
    function QueryADatabaseRequestBodySorts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=direction" }),
        __metadata("design:type", String)
    ], QueryADatabaseRequestBodySorts.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=property" }),
        __metadata("design:type", String)
    ], QueryADatabaseRequestBodySorts.prototype, "property", void 0);
    return QueryADatabaseRequestBodySorts;
}(SpeakeasyBase));
export { QueryADatabaseRequestBodySorts };
var QueryADatabaseRequestBody = /** @class */ (function (_super) {
    __extends(QueryADatabaseRequestBody, _super);
    function QueryADatabaseRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter" }),
        __metadata("design:type", QueryADatabaseRequestBodyFilter)
    ], QueryADatabaseRequestBody.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sorts", elemType: QueryADatabaseRequestBodySorts }),
        __metadata("design:type", Array)
    ], QueryADatabaseRequestBody.prototype, "sorts", void 0);
    return QueryADatabaseRequestBody;
}(SpeakeasyBase));
export { QueryADatabaseRequestBody };
var QueryADatabase200ApplicationJsonResultsParent = /** @class */ (function (_super) {
    __extends(QueryADatabase200ApplicationJsonResultsParent, _super);
    function QueryADatabase200ApplicationJsonResultsParent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=database_id" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResultsParent.prototype, "databaseId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResultsParent.prototype, "type", void 0);
    return QueryADatabase200ApplicationJsonResultsParent;
}(SpeakeasyBase));
export { QueryADatabase200ApplicationJsonResultsParent };
var QueryADatabase200ApplicationJsonResultsPropertiesAuthorMultiSelect = /** @class */ (function (_super) {
    __extends(QueryADatabase200ApplicationJsonResultsPropertiesAuthorMultiSelect, _super);
    function QueryADatabase200ApplicationJsonResultsPropertiesAuthorMultiSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResultsPropertiesAuthorMultiSelect.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResultsPropertiesAuthorMultiSelect.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResultsPropertiesAuthorMultiSelect.prototype, "name", void 0);
    return QueryADatabase200ApplicationJsonResultsPropertiesAuthorMultiSelect;
}(SpeakeasyBase));
export { QueryADatabase200ApplicationJsonResultsPropertiesAuthorMultiSelect };
var QueryADatabase200ApplicationJsonResultsPropertiesAuthor = /** @class */ (function (_super) {
    __extends(QueryADatabase200ApplicationJsonResultsPropertiesAuthor, _super);
    function QueryADatabase200ApplicationJsonResultsPropertiesAuthor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResultsPropertiesAuthor.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=multi_select", elemType: QueryADatabase200ApplicationJsonResultsPropertiesAuthorMultiSelect }),
        __metadata("design:type", Array)
    ], QueryADatabase200ApplicationJsonResultsPropertiesAuthor.prototype, "multiSelect", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResultsPropertiesAuthor.prototype, "type", void 0);
    return QueryADatabase200ApplicationJsonResultsPropertiesAuthor;
}(SpeakeasyBase));
export { QueryADatabase200ApplicationJsonResultsPropertiesAuthor };
var QueryADatabase200ApplicationJsonResultsPropertiesLink = /** @class */ (function (_super) {
    __extends(QueryADatabase200ApplicationJsonResultsPropertiesLink, _super);
    function QueryADatabase200ApplicationJsonResultsPropertiesLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResultsPropertiesLink.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResultsPropertiesLink.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResultsPropertiesLink.prototype, "url", void 0);
    return QueryADatabase200ApplicationJsonResultsPropertiesLink;
}(SpeakeasyBase));
export { QueryADatabase200ApplicationJsonResultsPropertiesLink };
var QueryADatabase200ApplicationJsonResultsPropertiesNameTitleAnnotations = /** @class */ (function (_super) {
    __extends(QueryADatabase200ApplicationJsonResultsPropertiesNameTitleAnnotations, _super);
    function QueryADatabase200ApplicationJsonResultsPropertiesNameTitleAnnotations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bold" }),
        __metadata("design:type", Boolean)
    ], QueryADatabase200ApplicationJsonResultsPropertiesNameTitleAnnotations.prototype, "bold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Boolean)
    ], QueryADatabase200ApplicationJsonResultsPropertiesNameTitleAnnotations.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResultsPropertiesNameTitleAnnotations.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=italic" }),
        __metadata("design:type", Boolean)
    ], QueryADatabase200ApplicationJsonResultsPropertiesNameTitleAnnotations.prototype, "italic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=strikethrough" }),
        __metadata("design:type", Boolean)
    ], QueryADatabase200ApplicationJsonResultsPropertiesNameTitleAnnotations.prototype, "strikethrough", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=underline" }),
        __metadata("design:type", Boolean)
    ], QueryADatabase200ApplicationJsonResultsPropertiesNameTitleAnnotations.prototype, "underline", void 0);
    return QueryADatabase200ApplicationJsonResultsPropertiesNameTitleAnnotations;
}(SpeakeasyBase));
export { QueryADatabase200ApplicationJsonResultsPropertiesNameTitleAnnotations };
var QueryADatabase200ApplicationJsonResultsPropertiesNameTitleText = /** @class */ (function (_super) {
    __extends(QueryADatabase200ApplicationJsonResultsPropertiesNameTitleText, _super);
    function QueryADatabase200ApplicationJsonResultsPropertiesNameTitleText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResultsPropertiesNameTitleText.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", Object)
    ], QueryADatabase200ApplicationJsonResultsPropertiesNameTitleText.prototype, "link", void 0);
    return QueryADatabase200ApplicationJsonResultsPropertiesNameTitleText;
}(SpeakeasyBase));
export { QueryADatabase200ApplicationJsonResultsPropertiesNameTitleText };
var QueryADatabase200ApplicationJsonResultsPropertiesNameTitle = /** @class */ (function (_super) {
    __extends(QueryADatabase200ApplicationJsonResultsPropertiesNameTitle, _super);
    function QueryADatabase200ApplicationJsonResultsPropertiesNameTitle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotations" }),
        __metadata("design:type", QueryADatabase200ApplicationJsonResultsPropertiesNameTitleAnnotations)
    ], QueryADatabase200ApplicationJsonResultsPropertiesNameTitle.prototype, "annotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", Object)
    ], QueryADatabase200ApplicationJsonResultsPropertiesNameTitle.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=plain_text" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResultsPropertiesNameTitle.prototype, "plainText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", QueryADatabase200ApplicationJsonResultsPropertiesNameTitleText)
    ], QueryADatabase200ApplicationJsonResultsPropertiesNameTitle.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResultsPropertiesNameTitle.prototype, "type", void 0);
    return QueryADatabase200ApplicationJsonResultsPropertiesNameTitle;
}(SpeakeasyBase));
export { QueryADatabase200ApplicationJsonResultsPropertiesNameTitle };
var QueryADatabase200ApplicationJsonResultsPropertiesName = /** @class */ (function (_super) {
    __extends(QueryADatabase200ApplicationJsonResultsPropertiesName, _super);
    function QueryADatabase200ApplicationJsonResultsPropertiesName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResultsPropertiesName.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title", elemType: QueryADatabase200ApplicationJsonResultsPropertiesNameTitle }),
        __metadata("design:type", Array)
    ], QueryADatabase200ApplicationJsonResultsPropertiesName.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResultsPropertiesName.prototype, "type", void 0);
    return QueryADatabase200ApplicationJsonResultsPropertiesName;
}(SpeakeasyBase));
export { QueryADatabase200ApplicationJsonResultsPropertiesName };
var QueryADatabase200ApplicationJsonResultsPropertiesPublisherSelect = /** @class */ (function (_super) {
    __extends(QueryADatabase200ApplicationJsonResultsPropertiesPublisherSelect, _super);
    function QueryADatabase200ApplicationJsonResultsPropertiesPublisherSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResultsPropertiesPublisherSelect.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResultsPropertiesPublisherSelect.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResultsPropertiesPublisherSelect.prototype, "name", void 0);
    return QueryADatabase200ApplicationJsonResultsPropertiesPublisherSelect;
}(SpeakeasyBase));
export { QueryADatabase200ApplicationJsonResultsPropertiesPublisherSelect };
var QueryADatabase200ApplicationJsonResultsPropertiesPublisher = /** @class */ (function (_super) {
    __extends(QueryADatabase200ApplicationJsonResultsPropertiesPublisher, _super);
    function QueryADatabase200ApplicationJsonResultsPropertiesPublisher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResultsPropertiesPublisher.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=select" }),
        __metadata("design:type", QueryADatabase200ApplicationJsonResultsPropertiesPublisherSelect)
    ], QueryADatabase200ApplicationJsonResultsPropertiesPublisher.prototype, "select", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResultsPropertiesPublisher.prototype, "type", void 0);
    return QueryADatabase200ApplicationJsonResultsPropertiesPublisher;
}(SpeakeasyBase));
export { QueryADatabase200ApplicationJsonResultsPropertiesPublisher };
var QueryADatabase200ApplicationJsonResultsPropertiesPublishingReleaseDateDate = /** @class */ (function (_super) {
    __extends(QueryADatabase200ApplicationJsonResultsPropertiesPublishingReleaseDateDate, _super);
    function QueryADatabase200ApplicationJsonResultsPropertiesPublishingReleaseDateDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end" }),
        __metadata("design:type", Object)
    ], QueryADatabase200ApplicationJsonResultsPropertiesPublishingReleaseDateDate.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResultsPropertiesPublishingReleaseDateDate.prototype, "start", void 0);
    return QueryADatabase200ApplicationJsonResultsPropertiesPublishingReleaseDateDate;
}(SpeakeasyBase));
export { QueryADatabase200ApplicationJsonResultsPropertiesPublishingReleaseDateDate };
var QueryADatabase200ApplicationJsonResultsPropertiesPublishingReleaseDate = /** @class */ (function (_super) {
    __extends(QueryADatabase200ApplicationJsonResultsPropertiesPublishingReleaseDate, _super);
    function QueryADatabase200ApplicationJsonResultsPropertiesPublishingReleaseDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", QueryADatabase200ApplicationJsonResultsPropertiesPublishingReleaseDateDate)
    ], QueryADatabase200ApplicationJsonResultsPropertiesPublishingReleaseDate.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResultsPropertiesPublishingReleaseDate.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResultsPropertiesPublishingReleaseDate.prototype, "type", void 0);
    return QueryADatabase200ApplicationJsonResultsPropertiesPublishingReleaseDate;
}(SpeakeasyBase));
export { QueryADatabase200ApplicationJsonResultsPropertiesPublishingReleaseDate };
var QueryADatabase200ApplicationJsonResultsPropertiesRead = /** @class */ (function (_super) {
    __extends(QueryADatabase200ApplicationJsonResultsPropertiesRead, _super);
    function QueryADatabase200ApplicationJsonResultsPropertiesRead() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=checkbox" }),
        __metadata("design:type", Boolean)
    ], QueryADatabase200ApplicationJsonResultsPropertiesRead.prototype, "checkbox", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResultsPropertiesRead.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResultsPropertiesRead.prototype, "type", void 0);
    return QueryADatabase200ApplicationJsonResultsPropertiesRead;
}(SpeakeasyBase));
export { QueryADatabase200ApplicationJsonResultsPropertiesRead };
var QueryADatabase200ApplicationJsonResultsPropertiesScore5Select = /** @class */ (function (_super) {
    __extends(QueryADatabase200ApplicationJsonResultsPropertiesScore5Select, _super);
    function QueryADatabase200ApplicationJsonResultsPropertiesScore5Select() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResultsPropertiesScore5Select.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResultsPropertiesScore5Select.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResultsPropertiesScore5Select.prototype, "name", void 0);
    return QueryADatabase200ApplicationJsonResultsPropertiesScore5Select;
}(SpeakeasyBase));
export { QueryADatabase200ApplicationJsonResultsPropertiesScore5Select };
var QueryADatabase200ApplicationJsonResultsPropertiesScore5 = /** @class */ (function (_super) {
    __extends(QueryADatabase200ApplicationJsonResultsPropertiesScore5, _super);
    function QueryADatabase200ApplicationJsonResultsPropertiesScore5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResultsPropertiesScore5.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=select" }),
        __metadata("design:type", QueryADatabase200ApplicationJsonResultsPropertiesScore5Select)
    ], QueryADatabase200ApplicationJsonResultsPropertiesScore5.prototype, "select", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResultsPropertiesScore5.prototype, "type", void 0);
    return QueryADatabase200ApplicationJsonResultsPropertiesScore5;
}(SpeakeasyBase));
export { QueryADatabase200ApplicationJsonResultsPropertiesScore5 };
var QueryADatabase200ApplicationJsonResultsPropertiesStatusSelect = /** @class */ (function (_super) {
    __extends(QueryADatabase200ApplicationJsonResultsPropertiesStatusSelect, _super);
    function QueryADatabase200ApplicationJsonResultsPropertiesStatusSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResultsPropertiesStatusSelect.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResultsPropertiesStatusSelect.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResultsPropertiesStatusSelect.prototype, "name", void 0);
    return QueryADatabase200ApplicationJsonResultsPropertiesStatusSelect;
}(SpeakeasyBase));
export { QueryADatabase200ApplicationJsonResultsPropertiesStatusSelect };
var QueryADatabase200ApplicationJsonResultsPropertiesStatus = /** @class */ (function (_super) {
    __extends(QueryADatabase200ApplicationJsonResultsPropertiesStatus, _super);
    function QueryADatabase200ApplicationJsonResultsPropertiesStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResultsPropertiesStatus.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=select" }),
        __metadata("design:type", QueryADatabase200ApplicationJsonResultsPropertiesStatusSelect)
    ], QueryADatabase200ApplicationJsonResultsPropertiesStatus.prototype, "select", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResultsPropertiesStatus.prototype, "type", void 0);
    return QueryADatabase200ApplicationJsonResultsPropertiesStatus;
}(SpeakeasyBase));
export { QueryADatabase200ApplicationJsonResultsPropertiesStatus };
var QueryADatabase200ApplicationJsonResultsPropertiesSummary = /** @class */ (function (_super) {
    __extends(QueryADatabase200ApplicationJsonResultsPropertiesSummary, _super);
    function QueryADatabase200ApplicationJsonResultsPropertiesSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResultsPropertiesSummary.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", Array)
    ], QueryADatabase200ApplicationJsonResultsPropertiesSummary.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResultsPropertiesSummary.prototype, "type", void 0);
    return QueryADatabase200ApplicationJsonResultsPropertiesSummary;
}(SpeakeasyBase));
export { QueryADatabase200ApplicationJsonResultsPropertiesSummary };
var QueryADatabase200ApplicationJsonResultsPropertiesTypeSelect = /** @class */ (function (_super) {
    __extends(QueryADatabase200ApplicationJsonResultsPropertiesTypeSelect, _super);
    function QueryADatabase200ApplicationJsonResultsPropertiesTypeSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResultsPropertiesTypeSelect.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResultsPropertiesTypeSelect.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResultsPropertiesTypeSelect.prototype, "name", void 0);
    return QueryADatabase200ApplicationJsonResultsPropertiesTypeSelect;
}(SpeakeasyBase));
export { QueryADatabase200ApplicationJsonResultsPropertiesTypeSelect };
var QueryADatabase200ApplicationJsonResultsPropertiesType = /** @class */ (function (_super) {
    __extends(QueryADatabase200ApplicationJsonResultsPropertiesType, _super);
    function QueryADatabase200ApplicationJsonResultsPropertiesType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResultsPropertiesType.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=select" }),
        __metadata("design:type", QueryADatabase200ApplicationJsonResultsPropertiesTypeSelect)
    ], QueryADatabase200ApplicationJsonResultsPropertiesType.prototype, "select", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResultsPropertiesType.prototype, "type", void 0);
    return QueryADatabase200ApplicationJsonResultsPropertiesType;
}(SpeakeasyBase));
export { QueryADatabase200ApplicationJsonResultsPropertiesType };
var QueryADatabase200ApplicationJsonResultsProperties = /** @class */ (function (_super) {
    __extends(QueryADatabase200ApplicationJsonResultsProperties, _super);
    function QueryADatabase200ApplicationJsonResultsProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Author" }),
        __metadata("design:type", QueryADatabase200ApplicationJsonResultsPropertiesAuthor)
    ], QueryADatabase200ApplicationJsonResultsProperties.prototype, "author", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Link" }),
        __metadata("design:type", QueryADatabase200ApplicationJsonResultsPropertiesLink)
    ], QueryADatabase200ApplicationJsonResultsProperties.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", QueryADatabase200ApplicationJsonResultsPropertiesName)
    ], QueryADatabase200ApplicationJsonResultsProperties.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Publisher" }),
        __metadata("design:type", QueryADatabase200ApplicationJsonResultsPropertiesPublisher)
    ], QueryADatabase200ApplicationJsonResultsProperties.prototype, "publisher", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Publishing/Release Date" }),
        __metadata("design:type", QueryADatabase200ApplicationJsonResultsPropertiesPublishingReleaseDate)
    ], QueryADatabase200ApplicationJsonResultsProperties.prototype, "publishingReleaseDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Read" }),
        __metadata("design:type", QueryADatabase200ApplicationJsonResultsPropertiesRead)
    ], QueryADatabase200ApplicationJsonResultsProperties.prototype, "read", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Score /5" }),
        __metadata("design:type", QueryADatabase200ApplicationJsonResultsPropertiesScore5)
    ], QueryADatabase200ApplicationJsonResultsProperties.prototype, "score5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", QueryADatabase200ApplicationJsonResultsPropertiesStatus)
    ], QueryADatabase200ApplicationJsonResultsProperties.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Summary" }),
        __metadata("design:type", QueryADatabase200ApplicationJsonResultsPropertiesSummary)
    ], QueryADatabase200ApplicationJsonResultsProperties.prototype, "summary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", QueryADatabase200ApplicationJsonResultsPropertiesType)
    ], QueryADatabase200ApplicationJsonResultsProperties.prototype, "type", void 0);
    return QueryADatabase200ApplicationJsonResultsProperties;
}(SpeakeasyBase));
export { QueryADatabase200ApplicationJsonResultsProperties };
var QueryADatabase200ApplicationJsonResults = /** @class */ (function (_super) {
    __extends(QueryADatabase200ApplicationJsonResults, _super);
    function QueryADatabase200ApplicationJsonResults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], QueryADatabase200ApplicationJsonResults.prototype, "archived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_time" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResults.prototype, "createdTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResults.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_edited_time" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResults.prototype, "lastEditedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=object" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJsonResults.prototype, "object", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent" }),
        __metadata("design:type", QueryADatabase200ApplicationJsonResultsParent)
    ], QueryADatabase200ApplicationJsonResults.prototype, "parent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties" }),
        __metadata("design:type", QueryADatabase200ApplicationJsonResultsProperties)
    ], QueryADatabase200ApplicationJsonResults.prototype, "properties", void 0);
    return QueryADatabase200ApplicationJsonResults;
}(SpeakeasyBase));
export { QueryADatabase200ApplicationJsonResults };
var QueryADatabase200ApplicationJson = /** @class */ (function (_super) {
    __extends(QueryADatabase200ApplicationJson, _super);
    function QueryADatabase200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=has_more" }),
        __metadata("design:type", Boolean)
    ], QueryADatabase200ApplicationJson.prototype, "hasMore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_cursor" }),
        __metadata("design:type", Object)
    ], QueryADatabase200ApplicationJson.prototype, "nextCursor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=object" }),
        __metadata("design:type", String)
    ], QueryADatabase200ApplicationJson.prototype, "object", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: QueryADatabase200ApplicationJsonResults }),
        __metadata("design:type", Array)
    ], QueryADatabase200ApplicationJson.prototype, "results", void 0);
    return QueryADatabase200ApplicationJson;
}(SpeakeasyBase));
export { QueryADatabase200ApplicationJson };
var QueryADatabaseRequest = /** @class */ (function (_super) {
    __extends(QueryADatabaseRequest, _super);
    function QueryADatabaseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", QueryADatabasePathParams)
    ], QueryADatabaseRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", QueryADatabaseRequestBody)
    ], QueryADatabaseRequest.prototype, "request", void 0);
    return QueryADatabaseRequest;
}(SpeakeasyBase));
export { QueryADatabaseRequest };
var QueryADatabaseResponse = /** @class */ (function (_super) {
    __extends(QueryADatabaseResponse, _super);
    function QueryADatabaseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], QueryADatabaseResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], QueryADatabaseResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], QueryADatabaseResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", QueryADatabase200ApplicationJson)
    ], QueryADatabaseResponse.prototype, "queryADatabase200ApplicationJsonObject", void 0);
    return QueryADatabaseResponse;
}(SpeakeasyBase));
export { QueryADatabaseResponse };
