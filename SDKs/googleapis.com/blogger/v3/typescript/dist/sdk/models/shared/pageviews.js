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
import * as shared from "../shared";
export var PageviewsCountsTimeRangeEnum;
(function (PageviewsCountsTimeRangeEnum) {
    PageviewsCountsTimeRangeEnum["AllTime"] = "ALL_TIME";
    PageviewsCountsTimeRangeEnum["ThirtyDays"] = "THIRTY_DAYS";
    PageviewsCountsTimeRangeEnum["SevenDays"] = "SEVEN_DAYS";
})(PageviewsCountsTimeRangeEnum || (PageviewsCountsTimeRangeEnum = {}));
var PageviewsCounts = /** @class */ (function (_super) {
    __extends(PageviewsCounts, _super);
    function PageviewsCounts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=count" }),
        __metadata("design:type", String)
    ], PageviewsCounts.prototype, "count", void 0);
    __decorate([
        Metadata({ data: "json, name=timeRange" }),
        __metadata("design:type", String)
    ], PageviewsCounts.prototype, "timeRange", void 0);
    return PageviewsCounts;
}(SpeakeasyBase));
export { PageviewsCounts };
var Pageviews = /** @class */ (function (_super) {
    __extends(Pageviews, _super);
    function Pageviews() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=blogId" }),
        __metadata("design:type", String)
    ], Pageviews.prototype, "blogId", void 0);
    __decorate([
        Metadata({ data: "json, name=counts", elemType: shared.PageviewsCounts }),
        __metadata("design:type", Array)
    ], Pageviews.prototype, "counts", void 0);
    __decorate([
        Metadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Pageviews.prototype, "kind", void 0);
    return Pageviews;
}(SpeakeasyBase));
export { Pageviews };
