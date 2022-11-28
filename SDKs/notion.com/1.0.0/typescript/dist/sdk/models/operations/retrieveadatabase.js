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
var RetrieveADatabasePathParams = /** @class */ (function (_super) {
    __extends(RetrieveADatabasePathParams, _super);
    function RetrieveADatabasePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], RetrieveADatabasePathParams.prototype, "id", void 0);
    return RetrieveADatabasePathParams;
}(SpeakeasyBase));
export { RetrieveADatabasePathParams };
var RetrieveADatabase200ApplicationJsonPropertiesAuthorMultiSelectOptions = /** @class */ (function (_super) {
    __extends(RetrieveADatabase200ApplicationJsonPropertiesAuthorMultiSelectOptions, _super);
    function RetrieveADatabase200ApplicationJsonPropertiesAuthorMultiSelectOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], RetrieveADatabase200ApplicationJsonPropertiesAuthorMultiSelectOptions.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RetrieveADatabase200ApplicationJsonPropertiesAuthorMultiSelectOptions.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], RetrieveADatabase200ApplicationJsonPropertiesAuthorMultiSelectOptions.prototype, "name", void 0);
    return RetrieveADatabase200ApplicationJsonPropertiesAuthorMultiSelectOptions;
}(SpeakeasyBase));
export { RetrieveADatabase200ApplicationJsonPropertiesAuthorMultiSelectOptions };
var RetrieveADatabase200ApplicationJsonPropertiesAuthorMultiSelect = /** @class */ (function (_super) {
    __extends(RetrieveADatabase200ApplicationJsonPropertiesAuthorMultiSelect, _super);
    function RetrieveADatabase200ApplicationJsonPropertiesAuthorMultiSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options", elemType: RetrieveADatabase200ApplicationJsonPropertiesAuthorMultiSelectOptions }),
        __metadata("design:type", Array)
    ], RetrieveADatabase200ApplicationJsonPropertiesAuthorMultiSelect.prototype, "options", void 0);
    return RetrieveADatabase200ApplicationJsonPropertiesAuthorMultiSelect;
}(SpeakeasyBase));
export { RetrieveADatabase200ApplicationJsonPropertiesAuthorMultiSelect };
var RetrieveADatabase200ApplicationJsonPropertiesAuthor = /** @class */ (function (_super) {
    __extends(RetrieveADatabase200ApplicationJsonPropertiesAuthor, _super);
    function RetrieveADatabase200ApplicationJsonPropertiesAuthor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RetrieveADatabase200ApplicationJsonPropertiesAuthor.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=multi_select" }),
        __metadata("design:type", RetrieveADatabase200ApplicationJsonPropertiesAuthorMultiSelect)
    ], RetrieveADatabase200ApplicationJsonPropertiesAuthor.prototype, "multiSelect", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RetrieveADatabase200ApplicationJsonPropertiesAuthor.prototype, "type", void 0);
    return RetrieveADatabase200ApplicationJsonPropertiesAuthor;
}(SpeakeasyBase));
export { RetrieveADatabase200ApplicationJsonPropertiesAuthor };
var RetrieveADatabase200ApplicationJsonPropertiesLink = /** @class */ (function (_super) {
    __extends(RetrieveADatabase200ApplicationJsonPropertiesLink, _super);
    function RetrieveADatabase200ApplicationJsonPropertiesLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RetrieveADatabase200ApplicationJsonPropertiesLink.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RetrieveADatabase200ApplicationJsonPropertiesLink.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", Map)
    ], RetrieveADatabase200ApplicationJsonPropertiesLink.prototype, "url", void 0);
    return RetrieveADatabase200ApplicationJsonPropertiesLink;
}(SpeakeasyBase));
export { RetrieveADatabase200ApplicationJsonPropertiesLink };
var RetrieveADatabase200ApplicationJsonPropertiesName = /** @class */ (function (_super) {
    __extends(RetrieveADatabase200ApplicationJsonPropertiesName, _super);
    function RetrieveADatabase200ApplicationJsonPropertiesName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RetrieveADatabase200ApplicationJsonPropertiesName.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", Map)
    ], RetrieveADatabase200ApplicationJsonPropertiesName.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RetrieveADatabase200ApplicationJsonPropertiesName.prototype, "type", void 0);
    return RetrieveADatabase200ApplicationJsonPropertiesName;
}(SpeakeasyBase));
export { RetrieveADatabase200ApplicationJsonPropertiesName };
var RetrieveADatabase200ApplicationJsonPropertiesPublisherSelectOptions = /** @class */ (function (_super) {
    __extends(RetrieveADatabase200ApplicationJsonPropertiesPublisherSelectOptions, _super);
    function RetrieveADatabase200ApplicationJsonPropertiesPublisherSelectOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], RetrieveADatabase200ApplicationJsonPropertiesPublisherSelectOptions.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RetrieveADatabase200ApplicationJsonPropertiesPublisherSelectOptions.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], RetrieveADatabase200ApplicationJsonPropertiesPublisherSelectOptions.prototype, "name", void 0);
    return RetrieveADatabase200ApplicationJsonPropertiesPublisherSelectOptions;
}(SpeakeasyBase));
export { RetrieveADatabase200ApplicationJsonPropertiesPublisherSelectOptions };
var RetrieveADatabase200ApplicationJsonPropertiesPublisherSelect = /** @class */ (function (_super) {
    __extends(RetrieveADatabase200ApplicationJsonPropertiesPublisherSelect, _super);
    function RetrieveADatabase200ApplicationJsonPropertiesPublisherSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options", elemType: RetrieveADatabase200ApplicationJsonPropertiesPublisherSelectOptions }),
        __metadata("design:type", Array)
    ], RetrieveADatabase200ApplicationJsonPropertiesPublisherSelect.prototype, "options", void 0);
    return RetrieveADatabase200ApplicationJsonPropertiesPublisherSelect;
}(SpeakeasyBase));
export { RetrieveADatabase200ApplicationJsonPropertiesPublisherSelect };
var RetrieveADatabase200ApplicationJsonPropertiesPublisher = /** @class */ (function (_super) {
    __extends(RetrieveADatabase200ApplicationJsonPropertiesPublisher, _super);
    function RetrieveADatabase200ApplicationJsonPropertiesPublisher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RetrieveADatabase200ApplicationJsonPropertiesPublisher.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=select" }),
        __metadata("design:type", RetrieveADatabase200ApplicationJsonPropertiesPublisherSelect)
    ], RetrieveADatabase200ApplicationJsonPropertiesPublisher.prototype, "select", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RetrieveADatabase200ApplicationJsonPropertiesPublisher.prototype, "type", void 0);
    return RetrieveADatabase200ApplicationJsonPropertiesPublisher;
}(SpeakeasyBase));
export { RetrieveADatabase200ApplicationJsonPropertiesPublisher };
var RetrieveADatabase200ApplicationJsonPropertiesPublishingReleaseDate = /** @class */ (function (_super) {
    __extends(RetrieveADatabase200ApplicationJsonPropertiesPublishingReleaseDate, _super);
    function RetrieveADatabase200ApplicationJsonPropertiesPublishingReleaseDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", Map)
    ], RetrieveADatabase200ApplicationJsonPropertiesPublishingReleaseDate.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RetrieveADatabase200ApplicationJsonPropertiesPublishingReleaseDate.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RetrieveADatabase200ApplicationJsonPropertiesPublishingReleaseDate.prototype, "type", void 0);
    return RetrieveADatabase200ApplicationJsonPropertiesPublishingReleaseDate;
}(SpeakeasyBase));
export { RetrieveADatabase200ApplicationJsonPropertiesPublishingReleaseDate };
var RetrieveADatabase200ApplicationJsonPropertiesRead = /** @class */ (function (_super) {
    __extends(RetrieveADatabase200ApplicationJsonPropertiesRead, _super);
    function RetrieveADatabase200ApplicationJsonPropertiesRead() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=checkbox" }),
        __metadata("design:type", Map)
    ], RetrieveADatabase200ApplicationJsonPropertiesRead.prototype, "checkbox", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RetrieveADatabase200ApplicationJsonPropertiesRead.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RetrieveADatabase200ApplicationJsonPropertiesRead.prototype, "type", void 0);
    return RetrieveADatabase200ApplicationJsonPropertiesRead;
}(SpeakeasyBase));
export { RetrieveADatabase200ApplicationJsonPropertiesRead };
var RetrieveADatabase200ApplicationJsonPropertiesScore5SelectOptions = /** @class */ (function (_super) {
    __extends(RetrieveADatabase200ApplicationJsonPropertiesScore5SelectOptions, _super);
    function RetrieveADatabase200ApplicationJsonPropertiesScore5SelectOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], RetrieveADatabase200ApplicationJsonPropertiesScore5SelectOptions.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RetrieveADatabase200ApplicationJsonPropertiesScore5SelectOptions.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], RetrieveADatabase200ApplicationJsonPropertiesScore5SelectOptions.prototype, "name", void 0);
    return RetrieveADatabase200ApplicationJsonPropertiesScore5SelectOptions;
}(SpeakeasyBase));
export { RetrieveADatabase200ApplicationJsonPropertiesScore5SelectOptions };
var RetrieveADatabase200ApplicationJsonPropertiesScore5Select = /** @class */ (function (_super) {
    __extends(RetrieveADatabase200ApplicationJsonPropertiesScore5Select, _super);
    function RetrieveADatabase200ApplicationJsonPropertiesScore5Select() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options", elemType: RetrieveADatabase200ApplicationJsonPropertiesScore5SelectOptions }),
        __metadata("design:type", Array)
    ], RetrieveADatabase200ApplicationJsonPropertiesScore5Select.prototype, "options", void 0);
    return RetrieveADatabase200ApplicationJsonPropertiesScore5Select;
}(SpeakeasyBase));
export { RetrieveADatabase200ApplicationJsonPropertiesScore5Select };
var RetrieveADatabase200ApplicationJsonPropertiesScore5 = /** @class */ (function (_super) {
    __extends(RetrieveADatabase200ApplicationJsonPropertiesScore5, _super);
    function RetrieveADatabase200ApplicationJsonPropertiesScore5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RetrieveADatabase200ApplicationJsonPropertiesScore5.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=select" }),
        __metadata("design:type", RetrieveADatabase200ApplicationJsonPropertiesScore5Select)
    ], RetrieveADatabase200ApplicationJsonPropertiesScore5.prototype, "select", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RetrieveADatabase200ApplicationJsonPropertiesScore5.prototype, "type", void 0);
    return RetrieveADatabase200ApplicationJsonPropertiesScore5;
}(SpeakeasyBase));
export { RetrieveADatabase200ApplicationJsonPropertiesScore5 };
var RetrieveADatabase200ApplicationJsonPropertiesStatusSelectOptions = /** @class */ (function (_super) {
    __extends(RetrieveADatabase200ApplicationJsonPropertiesStatusSelectOptions, _super);
    function RetrieveADatabase200ApplicationJsonPropertiesStatusSelectOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], RetrieveADatabase200ApplicationJsonPropertiesStatusSelectOptions.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RetrieveADatabase200ApplicationJsonPropertiesStatusSelectOptions.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], RetrieveADatabase200ApplicationJsonPropertiesStatusSelectOptions.prototype, "name", void 0);
    return RetrieveADatabase200ApplicationJsonPropertiesStatusSelectOptions;
}(SpeakeasyBase));
export { RetrieveADatabase200ApplicationJsonPropertiesStatusSelectOptions };
var RetrieveADatabase200ApplicationJsonPropertiesStatusSelect = /** @class */ (function (_super) {
    __extends(RetrieveADatabase200ApplicationJsonPropertiesStatusSelect, _super);
    function RetrieveADatabase200ApplicationJsonPropertiesStatusSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options", elemType: RetrieveADatabase200ApplicationJsonPropertiesStatusSelectOptions }),
        __metadata("design:type", Array)
    ], RetrieveADatabase200ApplicationJsonPropertiesStatusSelect.prototype, "options", void 0);
    return RetrieveADatabase200ApplicationJsonPropertiesStatusSelect;
}(SpeakeasyBase));
export { RetrieveADatabase200ApplicationJsonPropertiesStatusSelect };
var RetrieveADatabase200ApplicationJsonPropertiesStatus = /** @class */ (function (_super) {
    __extends(RetrieveADatabase200ApplicationJsonPropertiesStatus, _super);
    function RetrieveADatabase200ApplicationJsonPropertiesStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RetrieveADatabase200ApplicationJsonPropertiesStatus.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=select" }),
        __metadata("design:type", RetrieveADatabase200ApplicationJsonPropertiesStatusSelect)
    ], RetrieveADatabase200ApplicationJsonPropertiesStatus.prototype, "select", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RetrieveADatabase200ApplicationJsonPropertiesStatus.prototype, "type", void 0);
    return RetrieveADatabase200ApplicationJsonPropertiesStatus;
}(SpeakeasyBase));
export { RetrieveADatabase200ApplicationJsonPropertiesStatus };
var RetrieveADatabase200ApplicationJsonPropertiesSummary = /** @class */ (function (_super) {
    __extends(RetrieveADatabase200ApplicationJsonPropertiesSummary, _super);
    function RetrieveADatabase200ApplicationJsonPropertiesSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RetrieveADatabase200ApplicationJsonPropertiesSummary.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", Map)
    ], RetrieveADatabase200ApplicationJsonPropertiesSummary.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RetrieveADatabase200ApplicationJsonPropertiesSummary.prototype, "type", void 0);
    return RetrieveADatabase200ApplicationJsonPropertiesSummary;
}(SpeakeasyBase));
export { RetrieveADatabase200ApplicationJsonPropertiesSummary };
var RetrieveADatabase200ApplicationJsonPropertiesTypeSelectOptions = /** @class */ (function (_super) {
    __extends(RetrieveADatabase200ApplicationJsonPropertiesTypeSelectOptions, _super);
    function RetrieveADatabase200ApplicationJsonPropertiesTypeSelectOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], RetrieveADatabase200ApplicationJsonPropertiesTypeSelectOptions.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RetrieveADatabase200ApplicationJsonPropertiesTypeSelectOptions.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], RetrieveADatabase200ApplicationJsonPropertiesTypeSelectOptions.prototype, "name", void 0);
    return RetrieveADatabase200ApplicationJsonPropertiesTypeSelectOptions;
}(SpeakeasyBase));
export { RetrieveADatabase200ApplicationJsonPropertiesTypeSelectOptions };
var RetrieveADatabase200ApplicationJsonPropertiesTypeSelect = /** @class */ (function (_super) {
    __extends(RetrieveADatabase200ApplicationJsonPropertiesTypeSelect, _super);
    function RetrieveADatabase200ApplicationJsonPropertiesTypeSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options", elemType: RetrieveADatabase200ApplicationJsonPropertiesTypeSelectOptions }),
        __metadata("design:type", Array)
    ], RetrieveADatabase200ApplicationJsonPropertiesTypeSelect.prototype, "options", void 0);
    return RetrieveADatabase200ApplicationJsonPropertiesTypeSelect;
}(SpeakeasyBase));
export { RetrieveADatabase200ApplicationJsonPropertiesTypeSelect };
var RetrieveADatabase200ApplicationJsonPropertiesType = /** @class */ (function (_super) {
    __extends(RetrieveADatabase200ApplicationJsonPropertiesType, _super);
    function RetrieveADatabase200ApplicationJsonPropertiesType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RetrieveADatabase200ApplicationJsonPropertiesType.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=select" }),
        __metadata("design:type", RetrieveADatabase200ApplicationJsonPropertiesTypeSelect)
    ], RetrieveADatabase200ApplicationJsonPropertiesType.prototype, "select", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RetrieveADatabase200ApplicationJsonPropertiesType.prototype, "type", void 0);
    return RetrieveADatabase200ApplicationJsonPropertiesType;
}(SpeakeasyBase));
export { RetrieveADatabase200ApplicationJsonPropertiesType };
var RetrieveADatabase200ApplicationJsonProperties = /** @class */ (function (_super) {
    __extends(RetrieveADatabase200ApplicationJsonProperties, _super);
    function RetrieveADatabase200ApplicationJsonProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Author" }),
        __metadata("design:type", RetrieveADatabase200ApplicationJsonPropertiesAuthor)
    ], RetrieveADatabase200ApplicationJsonProperties.prototype, "author", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Link" }),
        __metadata("design:type", RetrieveADatabase200ApplicationJsonPropertiesLink)
    ], RetrieveADatabase200ApplicationJsonProperties.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", RetrieveADatabase200ApplicationJsonPropertiesName)
    ], RetrieveADatabase200ApplicationJsonProperties.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Publisher" }),
        __metadata("design:type", RetrieveADatabase200ApplicationJsonPropertiesPublisher)
    ], RetrieveADatabase200ApplicationJsonProperties.prototype, "publisher", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Publishing/Release Date" }),
        __metadata("design:type", RetrieveADatabase200ApplicationJsonPropertiesPublishingReleaseDate)
    ], RetrieveADatabase200ApplicationJsonProperties.prototype, "publishingReleaseDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Read" }),
        __metadata("design:type", RetrieveADatabase200ApplicationJsonPropertiesRead)
    ], RetrieveADatabase200ApplicationJsonProperties.prototype, "read", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Score /5" }),
        __metadata("design:type", RetrieveADatabase200ApplicationJsonPropertiesScore5)
    ], RetrieveADatabase200ApplicationJsonProperties.prototype, "score5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", RetrieveADatabase200ApplicationJsonPropertiesStatus)
    ], RetrieveADatabase200ApplicationJsonProperties.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Summary" }),
        __metadata("design:type", RetrieveADatabase200ApplicationJsonPropertiesSummary)
    ], RetrieveADatabase200ApplicationJsonProperties.prototype, "summary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", RetrieveADatabase200ApplicationJsonPropertiesType)
    ], RetrieveADatabase200ApplicationJsonProperties.prototype, "type", void 0);
    return RetrieveADatabase200ApplicationJsonProperties;
}(SpeakeasyBase));
export { RetrieveADatabase200ApplicationJsonProperties };
var RetrieveADatabase200ApplicationJsonTitleAnnotations = /** @class */ (function (_super) {
    __extends(RetrieveADatabase200ApplicationJsonTitleAnnotations, _super);
    function RetrieveADatabase200ApplicationJsonTitleAnnotations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bold" }),
        __metadata("design:type", Boolean)
    ], RetrieveADatabase200ApplicationJsonTitleAnnotations.prototype, "bold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Boolean)
    ], RetrieveADatabase200ApplicationJsonTitleAnnotations.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], RetrieveADatabase200ApplicationJsonTitleAnnotations.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=italic" }),
        __metadata("design:type", Boolean)
    ], RetrieveADatabase200ApplicationJsonTitleAnnotations.prototype, "italic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=strikethrough" }),
        __metadata("design:type", Boolean)
    ], RetrieveADatabase200ApplicationJsonTitleAnnotations.prototype, "strikethrough", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=underline" }),
        __metadata("design:type", Boolean)
    ], RetrieveADatabase200ApplicationJsonTitleAnnotations.prototype, "underline", void 0);
    return RetrieveADatabase200ApplicationJsonTitleAnnotations;
}(SpeakeasyBase));
export { RetrieveADatabase200ApplicationJsonTitleAnnotations };
var RetrieveADatabase200ApplicationJsonTitleText = /** @class */ (function (_super) {
    __extends(RetrieveADatabase200ApplicationJsonTitleText, _super);
    function RetrieveADatabase200ApplicationJsonTitleText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], RetrieveADatabase200ApplicationJsonTitleText.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", Object)
    ], RetrieveADatabase200ApplicationJsonTitleText.prototype, "link", void 0);
    return RetrieveADatabase200ApplicationJsonTitleText;
}(SpeakeasyBase));
export { RetrieveADatabase200ApplicationJsonTitleText };
var RetrieveADatabase200ApplicationJsonTitle = /** @class */ (function (_super) {
    __extends(RetrieveADatabase200ApplicationJsonTitle, _super);
    function RetrieveADatabase200ApplicationJsonTitle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotations" }),
        __metadata("design:type", RetrieveADatabase200ApplicationJsonTitleAnnotations)
    ], RetrieveADatabase200ApplicationJsonTitle.prototype, "annotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", Object)
    ], RetrieveADatabase200ApplicationJsonTitle.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=plain_text" }),
        __metadata("design:type", String)
    ], RetrieveADatabase200ApplicationJsonTitle.prototype, "plainText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", RetrieveADatabase200ApplicationJsonTitleText)
    ], RetrieveADatabase200ApplicationJsonTitle.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], RetrieveADatabase200ApplicationJsonTitle.prototype, "type", void 0);
    return RetrieveADatabase200ApplicationJsonTitle;
}(SpeakeasyBase));
export { RetrieveADatabase200ApplicationJsonTitle };
var RetrieveADatabase200ApplicationJson = /** @class */ (function (_super) {
    __extends(RetrieveADatabase200ApplicationJson, _super);
    function RetrieveADatabase200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_time" }),
        __metadata("design:type", String)
    ], RetrieveADatabase200ApplicationJson.prototype, "createdTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RetrieveADatabase200ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_edited_time" }),
        __metadata("design:type", String)
    ], RetrieveADatabase200ApplicationJson.prototype, "lastEditedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=object" }),
        __metadata("design:type", String)
    ], RetrieveADatabase200ApplicationJson.prototype, "object", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties" }),
        __metadata("design:type", RetrieveADatabase200ApplicationJsonProperties)
    ], RetrieveADatabase200ApplicationJson.prototype, "properties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title", elemType: RetrieveADatabase200ApplicationJsonTitle }),
        __metadata("design:type", Array)
    ], RetrieveADatabase200ApplicationJson.prototype, "title", void 0);
    return RetrieveADatabase200ApplicationJson;
}(SpeakeasyBase));
export { RetrieveADatabase200ApplicationJson };
var RetrieveADatabaseRequest = /** @class */ (function (_super) {
    __extends(RetrieveADatabaseRequest, _super);
    function RetrieveADatabaseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetrieveADatabasePathParams)
    ], RetrieveADatabaseRequest.prototype, "pathParams", void 0);
    return RetrieveADatabaseRequest;
}(SpeakeasyBase));
export { RetrieveADatabaseRequest };
var RetrieveADatabaseResponse = /** @class */ (function (_super) {
    __extends(RetrieveADatabaseResponse, _super);
    function RetrieveADatabaseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RetrieveADatabaseResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], RetrieveADatabaseResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RetrieveADatabaseResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetrieveADatabase200ApplicationJson)
    ], RetrieveADatabaseResponse.prototype, "retrieveADatabase200ApplicationJsonObject", void 0);
    return RetrieveADatabaseResponse;
}(SpeakeasyBase));
export { RetrieveADatabaseResponse };
