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
import { SectionColumnProperties } from "./sectioncolumnproperties";
import { Dimension } from "./dimension";
export var SectionStyleColumnSeparatorStyleEnum;
(function (SectionStyleColumnSeparatorStyleEnum) {
    SectionStyleColumnSeparatorStyleEnum["ColumnSeparatorStyleUnspecified"] = "COLUMN_SEPARATOR_STYLE_UNSPECIFIED";
    SectionStyleColumnSeparatorStyleEnum["None"] = "NONE";
    SectionStyleColumnSeparatorStyleEnum["BetweenEachColumn"] = "BETWEEN_EACH_COLUMN";
})(SectionStyleColumnSeparatorStyleEnum || (SectionStyleColumnSeparatorStyleEnum = {}));
export var SectionStyleContentDirectionEnum;
(function (SectionStyleContentDirectionEnum) {
    SectionStyleContentDirectionEnum["ContentDirectionUnspecified"] = "CONTENT_DIRECTION_UNSPECIFIED";
    SectionStyleContentDirectionEnum["LeftToRight"] = "LEFT_TO_RIGHT";
    SectionStyleContentDirectionEnum["RightToLeft"] = "RIGHT_TO_LEFT";
})(SectionStyleContentDirectionEnum || (SectionStyleContentDirectionEnum = {}));
export var SectionStyleSectionTypeEnum;
(function (SectionStyleSectionTypeEnum) {
    SectionStyleSectionTypeEnum["SectionTypeUnspecified"] = "SECTION_TYPE_UNSPECIFIED";
    SectionStyleSectionTypeEnum["Continuous"] = "CONTINUOUS";
    SectionStyleSectionTypeEnum["NextPage"] = "NEXT_PAGE";
})(SectionStyleSectionTypeEnum || (SectionStyleSectionTypeEnum = {}));
// SectionStyle
/**
 * The styling that applies to a section.
**/
var SectionStyle = /** @class */ (function (_super) {
    __extends(SectionStyle, _super);
    function SectionStyle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=columnProperties", elemType: SectionColumnProperties }),
        __metadata("design:type", Array)
    ], SectionStyle.prototype, "columnProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=columnSeparatorStyle" }),
        __metadata("design:type", String)
    ], SectionStyle.prototype, "columnSeparatorStyle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contentDirection" }),
        __metadata("design:type", String)
    ], SectionStyle.prototype, "contentDirection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultFooterId" }),
        __metadata("design:type", String)
    ], SectionStyle.prototype, "defaultFooterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultHeaderId" }),
        __metadata("design:type", String)
    ], SectionStyle.prototype, "defaultHeaderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=evenPageFooterId" }),
        __metadata("design:type", String)
    ], SectionStyle.prototype, "evenPageFooterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=evenPageHeaderId" }),
        __metadata("design:type", String)
    ], SectionStyle.prototype, "evenPageHeaderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstPageFooterId" }),
        __metadata("design:type", String)
    ], SectionStyle.prototype, "firstPageFooterId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstPageHeaderId" }),
        __metadata("design:type", String)
    ], SectionStyle.prototype, "firstPageHeaderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=marginBottom" }),
        __metadata("design:type", Dimension)
    ], SectionStyle.prototype, "marginBottom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=marginFooter" }),
        __metadata("design:type", Dimension)
    ], SectionStyle.prototype, "marginFooter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=marginHeader" }),
        __metadata("design:type", Dimension)
    ], SectionStyle.prototype, "marginHeader", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=marginLeft" }),
        __metadata("design:type", Dimension)
    ], SectionStyle.prototype, "marginLeft", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=marginRight" }),
        __metadata("design:type", Dimension)
    ], SectionStyle.prototype, "marginRight", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=marginTop" }),
        __metadata("design:type", Dimension)
    ], SectionStyle.prototype, "marginTop", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pageNumberStart" }),
        __metadata("design:type", Number)
    ], SectionStyle.prototype, "pageNumberStart", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sectionType" }),
        __metadata("design:type", String)
    ], SectionStyle.prototype, "sectionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useFirstPageHeaderFooter" }),
        __metadata("design:type", Boolean)
    ], SectionStyle.prototype, "useFirstPageHeaderFooter", void 0);
    return SectionStyle;
}(SpeakeasyBase));
export { SectionStyle };
