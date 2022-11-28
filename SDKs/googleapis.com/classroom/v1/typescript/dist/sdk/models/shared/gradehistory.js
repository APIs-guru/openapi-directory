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
export var GradeHistoryGradeChangeTypeEnum;
(function (GradeHistoryGradeChangeTypeEnum) {
    GradeHistoryGradeChangeTypeEnum["UnknownGradeChangeType"] = "UNKNOWN_GRADE_CHANGE_TYPE";
    GradeHistoryGradeChangeTypeEnum["DraftGradePointsEarnedChange"] = "DRAFT_GRADE_POINTS_EARNED_CHANGE";
    GradeHistoryGradeChangeTypeEnum["AssignedGradePointsEarnedChange"] = "ASSIGNED_GRADE_POINTS_EARNED_CHANGE";
    GradeHistoryGradeChangeTypeEnum["MaxPointsChange"] = "MAX_POINTS_CHANGE";
})(GradeHistoryGradeChangeTypeEnum || (GradeHistoryGradeChangeTypeEnum = {}));
// GradeHistory
/**
 * The history of each grade on this submission.
**/
var GradeHistory = /** @class */ (function (_super) {
    __extends(GradeHistory, _super);
    function GradeHistory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actorUserId" }),
        __metadata("design:type", String)
    ], GradeHistory.prototype, "actorUserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gradeChangeType" }),
        __metadata("design:type", String)
    ], GradeHistory.prototype, "gradeChangeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gradeTimestamp" }),
        __metadata("design:type", String)
    ], GradeHistory.prototype, "gradeTimestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxPoints" }),
        __metadata("design:type", Number)
    ], GradeHistory.prototype, "maxPoints", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pointsEarned" }),
        __metadata("design:type", Number)
    ], GradeHistory.prototype, "pointsEarned", void 0);
    return GradeHistory;
}(SpeakeasyBase));
export { GradeHistory };
