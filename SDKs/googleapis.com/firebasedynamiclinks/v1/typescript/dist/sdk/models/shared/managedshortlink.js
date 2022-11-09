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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DynamicLinkInfo } from "./dynamiclinkinfo";
export var ManagedShortLinkFlaggedAttributeEnum;
(function (ManagedShortLinkFlaggedAttributeEnum) {
    ManagedShortLinkFlaggedAttributeEnum["UnspecifiedAttribute"] = "UNSPECIFIED_ATTRIBUTE";
    ManagedShortLinkFlaggedAttributeEnum["Spam"] = "SPAM";
})(ManagedShortLinkFlaggedAttributeEnum || (ManagedShortLinkFlaggedAttributeEnum = {}));
export var ManagedShortLinkVisibilityEnum;
(function (ManagedShortLinkVisibilityEnum) {
    ManagedShortLinkVisibilityEnum["UnspecifiedVisibility"] = "UNSPECIFIED_VISIBILITY";
    ManagedShortLinkVisibilityEnum["Unarchived"] = "UNARCHIVED";
    ManagedShortLinkVisibilityEnum["Archived"] = "ARCHIVED";
    ManagedShortLinkVisibilityEnum["NeverShown"] = "NEVER_SHOWN";
})(ManagedShortLinkVisibilityEnum || (ManagedShortLinkVisibilityEnum = {}));
// ManagedShortLink
/**
 * Managed Short Link.
**/
var ManagedShortLink = /** @class */ (function (_super) {
    __extends(ManagedShortLink, _super);
    function ManagedShortLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=creationTime" }),
        __metadata("design:type", String)
    ], ManagedShortLink.prototype, "creationTime", void 0);
    __decorate([
        Metadata({ data: "json, name=flaggedAttribute" }),
        __metadata("design:type", Array)
    ], ManagedShortLink.prototype, "flaggedAttribute", void 0);
    __decorate([
        Metadata({ data: "json, name=info" }),
        __metadata("design:type", DynamicLinkInfo)
    ], ManagedShortLink.prototype, "info", void 0);
    __decorate([
        Metadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], ManagedShortLink.prototype, "link", void 0);
    __decorate([
        Metadata({ data: "json, name=linkName" }),
        __metadata("design:type", String)
    ], ManagedShortLink.prototype, "linkName", void 0);
    __decorate([
        Metadata({ data: "json, name=visibility" }),
        __metadata("design:type", String)
    ], ManagedShortLink.prototype, "visibility", void 0);
    return ManagedShortLink;
}(SpeakeasyBase));
export { ManagedShortLink };
