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
import { ClickThroughUrl } from "./clickthroughurl";
import { CompanionClickThroughOverride } from "./companionclickthroughoverride";
import { CreativeGroupAssignment } from "./creativegroupassignment";
import { DimensionValue } from "./dimensionvalue";
import { RichMediaExitOverride } from "./richmediaexitoverride";
// CreativeAssignment
/**
 * Creative Assignment.
**/
var CreativeAssignment = /** @class */ (function (_super) {
    __extends(CreativeAssignment, _super);
    function CreativeAssignment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active" }),
        __metadata("design:type", Boolean)
    ], CreativeAssignment.prototype, "active", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=applyEventTags" }),
        __metadata("design:type", Boolean)
    ], CreativeAssignment.prototype, "applyEventTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clickThroughUrl" }),
        __metadata("design:type", ClickThroughUrl)
    ], CreativeAssignment.prototype, "clickThroughUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=companionCreativeOverrides", elemType: CompanionClickThroughOverride }),
        __metadata("design:type", Array)
    ], CreativeAssignment.prototype, "companionCreativeOverrides", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeGroupAssignments", elemType: CreativeGroupAssignment }),
        __metadata("design:type", Array)
    ], CreativeAssignment.prototype, "creativeGroupAssignments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeId" }),
        __metadata("design:type", String)
    ], CreativeAssignment.prototype, "creativeId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=creativeIdDimensionValue" }),
        __metadata("design:type", DimensionValue)
    ], CreativeAssignment.prototype, "creativeIdDimensionValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=endTime" }),
        __metadata("design:type", Date)
    ], CreativeAssignment.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=richMediaExitOverrides", elemType: RichMediaExitOverride }),
        __metadata("design:type", Array)
    ], CreativeAssignment.prototype, "richMediaExitOverrides", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sequence" }),
        __metadata("design:type", Number)
    ], CreativeAssignment.prototype, "sequence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sslCompliant" }),
        __metadata("design:type", Boolean)
    ], CreativeAssignment.prototype, "sslCompliant", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", Date)
    ], CreativeAssignment.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=weight" }),
        __metadata("design:type", Number)
    ], CreativeAssignment.prototype, "weight", void 0);
    return CreativeAssignment;
}(SpeakeasyBase));
export { CreativeAssignment };
