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
var UpdateADatabasePathParams = /** @class */ (function (_super) {
    __extends(UpdateADatabasePathParams, _super);
    function UpdateADatabasePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], UpdateADatabasePathParams.prototype, "id", void 0);
    return UpdateADatabasePathParams;
}(SpeakeasyBase));
export { UpdateADatabasePathParams };
var UpdateADatabaseRequestBodyPropertiesWinePairing = /** @class */ (function (_super) {
    __extends(UpdateADatabaseRequestBodyPropertiesWinePairing, _super);
    function UpdateADatabaseRequestBodyPropertiesWinePairing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rich_text" }),
        __metadata("design:type", Map)
    ], UpdateADatabaseRequestBodyPropertiesWinePairing.prototype, "richText", void 0);
    return UpdateADatabaseRequestBodyPropertiesWinePairing;
}(SpeakeasyBase));
export { UpdateADatabaseRequestBodyPropertiesWinePairing };
var UpdateADatabaseRequestBodyProperties = /** @class */ (function (_super) {
    __extends(UpdateADatabaseRequestBodyProperties, _super);
    function UpdateADatabaseRequestBodyProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Wine Pairing" }),
        __metadata("design:type", UpdateADatabaseRequestBodyPropertiesWinePairing)
    ], UpdateADatabaseRequestBodyProperties.prototype, "winePairing", void 0);
    return UpdateADatabaseRequestBodyProperties;
}(SpeakeasyBase));
export { UpdateADatabaseRequestBodyProperties };
var UpdateADatabaseRequestBodyTitleText = /** @class */ (function (_super) {
    __extends(UpdateADatabaseRequestBodyTitleText, _super);
    function UpdateADatabaseRequestBodyTitleText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], UpdateADatabaseRequestBodyTitleText.prototype, "content", void 0);
    return UpdateADatabaseRequestBodyTitleText;
}(SpeakeasyBase));
export { UpdateADatabaseRequestBodyTitleText };
var UpdateADatabaseRequestBodyTitle = /** @class */ (function (_super) {
    __extends(UpdateADatabaseRequestBodyTitle, _super);
    function UpdateADatabaseRequestBodyTitle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", UpdateADatabaseRequestBodyTitleText)
    ], UpdateADatabaseRequestBodyTitle.prototype, "text", void 0);
    return UpdateADatabaseRequestBodyTitle;
}(SpeakeasyBase));
export { UpdateADatabaseRequestBodyTitle };
var UpdateADatabaseRequestBody = /** @class */ (function (_super) {
    __extends(UpdateADatabaseRequestBody, _super);
    function UpdateADatabaseRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties" }),
        __metadata("design:type", UpdateADatabaseRequestBodyProperties)
    ], UpdateADatabaseRequestBody.prototype, "properties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title", elemType: UpdateADatabaseRequestBodyTitle }),
        __metadata("design:type", Array)
    ], UpdateADatabaseRequestBody.prototype, "title", void 0);
    return UpdateADatabaseRequestBody;
}(SpeakeasyBase));
export { UpdateADatabaseRequestBody };
var UpdateADatabase200ApplicationJsonParent = /** @class */ (function (_super) {
    __extends(UpdateADatabase200ApplicationJsonParent, _super);
    function UpdateADatabase200ApplicationJsonParent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_id" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonParent.prototype, "pageId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonParent.prototype, "type", void 0);
    return UpdateADatabase200ApplicationJsonParent;
}(SpeakeasyBase));
export { UpdateADatabase200ApplicationJsonParent };
var UpdateADatabase200ApplicationJsonPropertiesAuthorMultiSelectOptions = /** @class */ (function (_super) {
    __extends(UpdateADatabase200ApplicationJsonPropertiesAuthorMultiSelectOptions, _super);
    function UpdateADatabase200ApplicationJsonPropertiesAuthorMultiSelectOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesAuthorMultiSelectOptions.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesAuthorMultiSelectOptions.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesAuthorMultiSelectOptions.prototype, "name", void 0);
    return UpdateADatabase200ApplicationJsonPropertiesAuthorMultiSelectOptions;
}(SpeakeasyBase));
export { UpdateADatabase200ApplicationJsonPropertiesAuthorMultiSelectOptions };
var UpdateADatabase200ApplicationJsonPropertiesAuthorMultiSelect = /** @class */ (function (_super) {
    __extends(UpdateADatabase200ApplicationJsonPropertiesAuthorMultiSelect, _super);
    function UpdateADatabase200ApplicationJsonPropertiesAuthorMultiSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options", elemType: UpdateADatabase200ApplicationJsonPropertiesAuthorMultiSelectOptions }),
        __metadata("design:type", Array)
    ], UpdateADatabase200ApplicationJsonPropertiesAuthorMultiSelect.prototype, "options", void 0);
    return UpdateADatabase200ApplicationJsonPropertiesAuthorMultiSelect;
}(SpeakeasyBase));
export { UpdateADatabase200ApplicationJsonPropertiesAuthorMultiSelect };
var UpdateADatabase200ApplicationJsonPropertiesAuthor = /** @class */ (function (_super) {
    __extends(UpdateADatabase200ApplicationJsonPropertiesAuthor, _super);
    function UpdateADatabase200ApplicationJsonPropertiesAuthor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesAuthor.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=multi_select" }),
        __metadata("design:type", UpdateADatabase200ApplicationJsonPropertiesAuthorMultiSelect)
    ], UpdateADatabase200ApplicationJsonPropertiesAuthor.prototype, "multiSelect", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesAuthor.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesAuthor.prototype, "type", void 0);
    return UpdateADatabase200ApplicationJsonPropertiesAuthor;
}(SpeakeasyBase));
export { UpdateADatabase200ApplicationJsonPropertiesAuthor };
var UpdateADatabase200ApplicationJsonPropertiesLink = /** @class */ (function (_super) {
    __extends(UpdateADatabase200ApplicationJsonPropertiesLink, _super);
    function UpdateADatabase200ApplicationJsonPropertiesLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesLink.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesLink.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesLink.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", Map)
    ], UpdateADatabase200ApplicationJsonPropertiesLink.prototype, "url", void 0);
    return UpdateADatabase200ApplicationJsonPropertiesLink;
}(SpeakeasyBase));
export { UpdateADatabase200ApplicationJsonPropertiesLink };
var UpdateADatabase200ApplicationJsonPropertiesName = /** @class */ (function (_super) {
    __extends(UpdateADatabase200ApplicationJsonPropertiesName, _super);
    function UpdateADatabase200ApplicationJsonPropertiesName() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesName.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesName.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", Map)
    ], UpdateADatabase200ApplicationJsonPropertiesName.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesName.prototype, "type", void 0);
    return UpdateADatabase200ApplicationJsonPropertiesName;
}(SpeakeasyBase));
export { UpdateADatabase200ApplicationJsonPropertiesName };
var UpdateADatabase200ApplicationJsonPropertiesPublisherSelectOptions = /** @class */ (function (_super) {
    __extends(UpdateADatabase200ApplicationJsonPropertiesPublisherSelectOptions, _super);
    function UpdateADatabase200ApplicationJsonPropertiesPublisherSelectOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesPublisherSelectOptions.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesPublisherSelectOptions.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesPublisherSelectOptions.prototype, "name", void 0);
    return UpdateADatabase200ApplicationJsonPropertiesPublisherSelectOptions;
}(SpeakeasyBase));
export { UpdateADatabase200ApplicationJsonPropertiesPublisherSelectOptions };
var UpdateADatabase200ApplicationJsonPropertiesPublisherSelect = /** @class */ (function (_super) {
    __extends(UpdateADatabase200ApplicationJsonPropertiesPublisherSelect, _super);
    function UpdateADatabase200ApplicationJsonPropertiesPublisherSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options", elemType: UpdateADatabase200ApplicationJsonPropertiesPublisherSelectOptions }),
        __metadata("design:type", Array)
    ], UpdateADatabase200ApplicationJsonPropertiesPublisherSelect.prototype, "options", void 0);
    return UpdateADatabase200ApplicationJsonPropertiesPublisherSelect;
}(SpeakeasyBase));
export { UpdateADatabase200ApplicationJsonPropertiesPublisherSelect };
var UpdateADatabase200ApplicationJsonPropertiesPublisher = /** @class */ (function (_super) {
    __extends(UpdateADatabase200ApplicationJsonPropertiesPublisher, _super);
    function UpdateADatabase200ApplicationJsonPropertiesPublisher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesPublisher.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesPublisher.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=select" }),
        __metadata("design:type", UpdateADatabase200ApplicationJsonPropertiesPublisherSelect)
    ], UpdateADatabase200ApplicationJsonPropertiesPublisher.prototype, "select", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesPublisher.prototype, "type", void 0);
    return UpdateADatabase200ApplicationJsonPropertiesPublisher;
}(SpeakeasyBase));
export { UpdateADatabase200ApplicationJsonPropertiesPublisher };
var UpdateADatabase200ApplicationJsonPropertiesPublishingReleaseDate = /** @class */ (function (_super) {
    __extends(UpdateADatabase200ApplicationJsonPropertiesPublishingReleaseDate, _super);
    function UpdateADatabase200ApplicationJsonPropertiesPublishingReleaseDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", Map)
    ], UpdateADatabase200ApplicationJsonPropertiesPublishingReleaseDate.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesPublishingReleaseDate.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesPublishingReleaseDate.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesPublishingReleaseDate.prototype, "type", void 0);
    return UpdateADatabase200ApplicationJsonPropertiesPublishingReleaseDate;
}(SpeakeasyBase));
export { UpdateADatabase200ApplicationJsonPropertiesPublishingReleaseDate };
var UpdateADatabase200ApplicationJsonPropertiesRead = /** @class */ (function (_super) {
    __extends(UpdateADatabase200ApplicationJsonPropertiesRead, _super);
    function UpdateADatabase200ApplicationJsonPropertiesRead() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=checkbox" }),
        __metadata("design:type", Map)
    ], UpdateADatabase200ApplicationJsonPropertiesRead.prototype, "checkbox", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesRead.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesRead.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesRead.prototype, "type", void 0);
    return UpdateADatabase200ApplicationJsonPropertiesRead;
}(SpeakeasyBase));
export { UpdateADatabase200ApplicationJsonPropertiesRead };
var UpdateADatabase200ApplicationJsonPropertiesScore5SelectOptions = /** @class */ (function (_super) {
    __extends(UpdateADatabase200ApplicationJsonPropertiesScore5SelectOptions, _super);
    function UpdateADatabase200ApplicationJsonPropertiesScore5SelectOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesScore5SelectOptions.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesScore5SelectOptions.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesScore5SelectOptions.prototype, "name", void 0);
    return UpdateADatabase200ApplicationJsonPropertiesScore5SelectOptions;
}(SpeakeasyBase));
export { UpdateADatabase200ApplicationJsonPropertiesScore5SelectOptions };
var UpdateADatabase200ApplicationJsonPropertiesScore5Select = /** @class */ (function (_super) {
    __extends(UpdateADatabase200ApplicationJsonPropertiesScore5Select, _super);
    function UpdateADatabase200ApplicationJsonPropertiesScore5Select() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options", elemType: UpdateADatabase200ApplicationJsonPropertiesScore5SelectOptions }),
        __metadata("design:type", Array)
    ], UpdateADatabase200ApplicationJsonPropertiesScore5Select.prototype, "options", void 0);
    return UpdateADatabase200ApplicationJsonPropertiesScore5Select;
}(SpeakeasyBase));
export { UpdateADatabase200ApplicationJsonPropertiesScore5Select };
var UpdateADatabase200ApplicationJsonPropertiesScore5 = /** @class */ (function (_super) {
    __extends(UpdateADatabase200ApplicationJsonPropertiesScore5, _super);
    function UpdateADatabase200ApplicationJsonPropertiesScore5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesScore5.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesScore5.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=select" }),
        __metadata("design:type", UpdateADatabase200ApplicationJsonPropertiesScore5Select)
    ], UpdateADatabase200ApplicationJsonPropertiesScore5.prototype, "select", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesScore5.prototype, "type", void 0);
    return UpdateADatabase200ApplicationJsonPropertiesScore5;
}(SpeakeasyBase));
export { UpdateADatabase200ApplicationJsonPropertiesScore5 };
var UpdateADatabase200ApplicationJsonPropertiesStatusSelectOptions = /** @class */ (function (_super) {
    __extends(UpdateADatabase200ApplicationJsonPropertiesStatusSelectOptions, _super);
    function UpdateADatabase200ApplicationJsonPropertiesStatusSelectOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesStatusSelectOptions.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesStatusSelectOptions.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesStatusSelectOptions.prototype, "name", void 0);
    return UpdateADatabase200ApplicationJsonPropertiesStatusSelectOptions;
}(SpeakeasyBase));
export { UpdateADatabase200ApplicationJsonPropertiesStatusSelectOptions };
var UpdateADatabase200ApplicationJsonPropertiesStatusSelect = /** @class */ (function (_super) {
    __extends(UpdateADatabase200ApplicationJsonPropertiesStatusSelect, _super);
    function UpdateADatabase200ApplicationJsonPropertiesStatusSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options", elemType: UpdateADatabase200ApplicationJsonPropertiesStatusSelectOptions }),
        __metadata("design:type", Array)
    ], UpdateADatabase200ApplicationJsonPropertiesStatusSelect.prototype, "options", void 0);
    return UpdateADatabase200ApplicationJsonPropertiesStatusSelect;
}(SpeakeasyBase));
export { UpdateADatabase200ApplicationJsonPropertiesStatusSelect };
var UpdateADatabase200ApplicationJsonPropertiesStatus = /** @class */ (function (_super) {
    __extends(UpdateADatabase200ApplicationJsonPropertiesStatus, _super);
    function UpdateADatabase200ApplicationJsonPropertiesStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesStatus.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesStatus.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=select" }),
        __metadata("design:type", UpdateADatabase200ApplicationJsonPropertiesStatusSelect)
    ], UpdateADatabase200ApplicationJsonPropertiesStatus.prototype, "select", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesStatus.prototype, "type", void 0);
    return UpdateADatabase200ApplicationJsonPropertiesStatus;
}(SpeakeasyBase));
export { UpdateADatabase200ApplicationJsonPropertiesStatus };
var UpdateADatabase200ApplicationJsonPropertiesSummary = /** @class */ (function (_super) {
    __extends(UpdateADatabase200ApplicationJsonPropertiesSummary, _super);
    function UpdateADatabase200ApplicationJsonPropertiesSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesSummary.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesSummary.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rich_text" }),
        __metadata("design:type", Map)
    ], UpdateADatabase200ApplicationJsonPropertiesSummary.prototype, "richText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesSummary.prototype, "type", void 0);
    return UpdateADatabase200ApplicationJsonPropertiesSummary;
}(SpeakeasyBase));
export { UpdateADatabase200ApplicationJsonPropertiesSummary };
var UpdateADatabase200ApplicationJsonPropertiesTypeSelectOptions = /** @class */ (function (_super) {
    __extends(UpdateADatabase200ApplicationJsonPropertiesTypeSelectOptions, _super);
    function UpdateADatabase200ApplicationJsonPropertiesTypeSelectOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesTypeSelectOptions.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesTypeSelectOptions.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesTypeSelectOptions.prototype, "name", void 0);
    return UpdateADatabase200ApplicationJsonPropertiesTypeSelectOptions;
}(SpeakeasyBase));
export { UpdateADatabase200ApplicationJsonPropertiesTypeSelectOptions };
var UpdateADatabase200ApplicationJsonPropertiesTypeSelect = /** @class */ (function (_super) {
    __extends(UpdateADatabase200ApplicationJsonPropertiesTypeSelect, _super);
    function UpdateADatabase200ApplicationJsonPropertiesTypeSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=options", elemType: UpdateADatabase200ApplicationJsonPropertiesTypeSelectOptions }),
        __metadata("design:type", Array)
    ], UpdateADatabase200ApplicationJsonPropertiesTypeSelect.prototype, "options", void 0);
    return UpdateADatabase200ApplicationJsonPropertiesTypeSelect;
}(SpeakeasyBase));
export { UpdateADatabase200ApplicationJsonPropertiesTypeSelect };
var UpdateADatabase200ApplicationJsonPropertiesType = /** @class */ (function (_super) {
    __extends(UpdateADatabase200ApplicationJsonPropertiesType, _super);
    function UpdateADatabase200ApplicationJsonPropertiesType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesType.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesType.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=select" }),
        __metadata("design:type", UpdateADatabase200ApplicationJsonPropertiesTypeSelect)
    ], UpdateADatabase200ApplicationJsonPropertiesType.prototype, "select", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesType.prototype, "type", void 0);
    return UpdateADatabase200ApplicationJsonPropertiesType;
}(SpeakeasyBase));
export { UpdateADatabase200ApplicationJsonPropertiesType };
var UpdateADatabase200ApplicationJsonPropertiesWinePairing = /** @class */ (function (_super) {
    __extends(UpdateADatabase200ApplicationJsonPropertiesWinePairing, _super);
    function UpdateADatabase200ApplicationJsonPropertiesWinePairing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesWinePairing.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesWinePairing.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rich_text" }),
        __metadata("design:type", Map)
    ], UpdateADatabase200ApplicationJsonPropertiesWinePairing.prototype, "richText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesWinePairing.prototype, "type", void 0);
    return UpdateADatabase200ApplicationJsonPropertiesWinePairing;
}(SpeakeasyBase));
export { UpdateADatabase200ApplicationJsonPropertiesWinePairing };
var UpdateADatabase200ApplicationJsonPropertiesDate = /** @class */ (function (_super) {
    __extends(UpdateADatabase200ApplicationJsonPropertiesDate, _super);
    function UpdateADatabase200ApplicationJsonPropertiesDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", Map)
    ], UpdateADatabase200ApplicationJsonPropertiesDate.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesDate.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesDate.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonPropertiesDate.prototype, "type", void 0);
    return UpdateADatabase200ApplicationJsonPropertiesDate;
}(SpeakeasyBase));
export { UpdateADatabase200ApplicationJsonPropertiesDate };
var UpdateADatabase200ApplicationJsonProperties = /** @class */ (function (_super) {
    __extends(UpdateADatabase200ApplicationJsonProperties, _super);
    function UpdateADatabase200ApplicationJsonProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Author" }),
        __metadata("design:type", UpdateADatabase200ApplicationJsonPropertiesAuthor)
    ], UpdateADatabase200ApplicationJsonProperties.prototype, "author", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Link" }),
        __metadata("design:type", UpdateADatabase200ApplicationJsonPropertiesLink)
    ], UpdateADatabase200ApplicationJsonProperties.prototype, "link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", UpdateADatabase200ApplicationJsonPropertiesName)
    ], UpdateADatabase200ApplicationJsonProperties.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Publisher" }),
        __metadata("design:type", UpdateADatabase200ApplicationJsonPropertiesPublisher)
    ], UpdateADatabase200ApplicationJsonProperties.prototype, "publisher", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Publishing/Release Date" }),
        __metadata("design:type", UpdateADatabase200ApplicationJsonPropertiesPublishingReleaseDate)
    ], UpdateADatabase200ApplicationJsonProperties.prototype, "publishingReleaseDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Read" }),
        __metadata("design:type", UpdateADatabase200ApplicationJsonPropertiesRead)
    ], UpdateADatabase200ApplicationJsonProperties.prototype, "read", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Score /5" }),
        __metadata("design:type", UpdateADatabase200ApplicationJsonPropertiesScore5)
    ], UpdateADatabase200ApplicationJsonProperties.prototype, "score5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", UpdateADatabase200ApplicationJsonPropertiesStatus)
    ], UpdateADatabase200ApplicationJsonProperties.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Summary" }),
        __metadata("design:type", UpdateADatabase200ApplicationJsonPropertiesSummary)
    ], UpdateADatabase200ApplicationJsonProperties.prototype, "summary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type" }),
        __metadata("design:type", UpdateADatabase200ApplicationJsonPropertiesType)
    ], UpdateADatabase200ApplicationJsonProperties.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Wine Pairing" }),
        __metadata("design:type", UpdateADatabase200ApplicationJsonPropertiesWinePairing)
    ], UpdateADatabase200ApplicationJsonProperties.prototype, "winePairing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", UpdateADatabase200ApplicationJsonPropertiesDate)
    ], UpdateADatabase200ApplicationJsonProperties.prototype, "date", void 0);
    return UpdateADatabase200ApplicationJsonProperties;
}(SpeakeasyBase));
export { UpdateADatabase200ApplicationJsonProperties };
var UpdateADatabase200ApplicationJsonTitleAnnotations = /** @class */ (function (_super) {
    __extends(UpdateADatabase200ApplicationJsonTitleAnnotations, _super);
    function UpdateADatabase200ApplicationJsonTitleAnnotations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bold" }),
        __metadata("design:type", Boolean)
    ], UpdateADatabase200ApplicationJsonTitleAnnotations.prototype, "bold", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", Boolean)
    ], UpdateADatabase200ApplicationJsonTitleAnnotations.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonTitleAnnotations.prototype, "color", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=italic" }),
        __metadata("design:type", Boolean)
    ], UpdateADatabase200ApplicationJsonTitleAnnotations.prototype, "italic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=strikethrough" }),
        __metadata("design:type", Boolean)
    ], UpdateADatabase200ApplicationJsonTitleAnnotations.prototype, "strikethrough", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=underline" }),
        __metadata("design:type", Boolean)
    ], UpdateADatabase200ApplicationJsonTitleAnnotations.prototype, "underline", void 0);
    return UpdateADatabase200ApplicationJsonTitleAnnotations;
}(SpeakeasyBase));
export { UpdateADatabase200ApplicationJsonTitleAnnotations };
var UpdateADatabase200ApplicationJsonTitleText = /** @class */ (function (_super) {
    __extends(UpdateADatabase200ApplicationJsonTitleText, _super);
    function UpdateADatabase200ApplicationJsonTitleText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=content" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonTitleText.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=link" }),
        __metadata("design:type", Object)
    ], UpdateADatabase200ApplicationJsonTitleText.prototype, "link", void 0);
    return UpdateADatabase200ApplicationJsonTitleText;
}(SpeakeasyBase));
export { UpdateADatabase200ApplicationJsonTitleText };
var UpdateADatabase200ApplicationJsonTitle = /** @class */ (function (_super) {
    __extends(UpdateADatabase200ApplicationJsonTitle, _super);
    function UpdateADatabase200ApplicationJsonTitle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=annotations" }),
        __metadata("design:type", UpdateADatabase200ApplicationJsonTitleAnnotations)
    ], UpdateADatabase200ApplicationJsonTitle.prototype, "annotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", Object)
    ], UpdateADatabase200ApplicationJsonTitle.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=plain_text" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonTitle.prototype, "plainText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=text" }),
        __metadata("design:type", UpdateADatabase200ApplicationJsonTitleText)
    ], UpdateADatabase200ApplicationJsonTitle.prototype, "text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJsonTitle.prototype, "type", void 0);
    return UpdateADatabase200ApplicationJsonTitle;
}(SpeakeasyBase));
export { UpdateADatabase200ApplicationJsonTitle };
var UpdateADatabase200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateADatabase200ApplicationJson, _super);
    function UpdateADatabase200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_time" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJson.prototype, "createdTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJson.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_edited_time" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJson.prototype, "lastEditedTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=object" }),
        __metadata("design:type", String)
    ], UpdateADatabase200ApplicationJson.prototype, "object", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent" }),
        __metadata("design:type", UpdateADatabase200ApplicationJsonParent)
    ], UpdateADatabase200ApplicationJson.prototype, "parent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties" }),
        __metadata("design:type", UpdateADatabase200ApplicationJsonProperties)
    ], UpdateADatabase200ApplicationJson.prototype, "properties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title", elemType: UpdateADatabase200ApplicationJsonTitle }),
        __metadata("design:type", Array)
    ], UpdateADatabase200ApplicationJson.prototype, "title", void 0);
    return UpdateADatabase200ApplicationJson;
}(SpeakeasyBase));
export { UpdateADatabase200ApplicationJson };
var UpdateADatabaseRequest = /** @class */ (function (_super) {
    __extends(UpdateADatabaseRequest, _super);
    function UpdateADatabaseRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateADatabasePathParams)
    ], UpdateADatabaseRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateADatabaseRequestBody)
    ], UpdateADatabaseRequest.prototype, "request", void 0);
    return UpdateADatabaseRequest;
}(SpeakeasyBase));
export { UpdateADatabaseRequest };
var UpdateADatabaseResponse = /** @class */ (function (_super) {
    __extends(UpdateADatabaseResponse, _super);
    function UpdateADatabaseResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateADatabaseResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateADatabaseResponse.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateADatabaseResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateADatabase200ApplicationJson)
    ], UpdateADatabaseResponse.prototype, "updateADatabase200ApplicationJsonObject", void 0);
    return UpdateADatabaseResponse;
}(SpeakeasyBase));
export { UpdateADatabaseResponse };
