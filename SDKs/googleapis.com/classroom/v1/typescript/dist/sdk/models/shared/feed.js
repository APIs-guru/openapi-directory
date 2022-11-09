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
import { CourseRosterChangesInfo } from "./courserosterchangesinfo";
import { CourseWorkChangesInfo } from "./courseworkchangesinfo";
export var FeedFeedTypeEnum;
(function (FeedFeedTypeEnum) {
    FeedFeedTypeEnum["FeedTypeUnspecified"] = "FEED_TYPE_UNSPECIFIED";
    FeedFeedTypeEnum["DomainRosterChanges"] = "DOMAIN_ROSTER_CHANGES";
    FeedFeedTypeEnum["CourseRosterChanges"] = "COURSE_ROSTER_CHANGES";
    FeedFeedTypeEnum["CourseWorkChanges"] = "COURSE_WORK_CHANGES";
})(FeedFeedTypeEnum || (FeedFeedTypeEnum = {}));
// Feed
/**
 * A class of notifications that an application can register to receive. For example: "all roster changes for a domain".
**/
var Feed = /** @class */ (function (_super) {
    __extends(Feed, _super);
    function Feed() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=courseRosterChangesInfo" }),
        __metadata("design:type", CourseRosterChangesInfo)
    ], Feed.prototype, "courseRosterChangesInfo", void 0);
    __decorate([
        Metadata({ data: "json, name=courseWorkChangesInfo" }),
        __metadata("design:type", CourseWorkChangesInfo)
    ], Feed.prototype, "courseWorkChangesInfo", void 0);
    __decorate([
        Metadata({ data: "json, name=feedType" }),
        __metadata("design:type", String)
    ], Feed.prototype, "feedType", void 0);
    return Feed;
}(SpeakeasyBase));
export { Feed };
