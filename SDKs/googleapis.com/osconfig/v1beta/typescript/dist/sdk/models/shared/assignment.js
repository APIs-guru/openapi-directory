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
import { AssignmentGroupLabel } from "./assignmentgrouplabel";
import { AssignmentOsType } from "./assignmentostype";
// Assignment
/**
 * An assignment represents the group or groups of VM instances that the policy applies to. If an assignment is empty, it applies to all VM instances. Otherwise, the targeted VM instances must meet all the criteria specified. So if both labels and zones are specified, the policy applies to VM instances with those labels and in those zones.
**/
var Assignment = /** @class */ (function (_super) {
    __extends(Assignment, _super);
    function Assignment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupLabels", elemType: AssignmentGroupLabel }),
        __metadata("design:type", Array)
    ], Assignment.prototype, "groupLabels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instanceNamePrefixes" }),
        __metadata("design:type", Array)
    ], Assignment.prototype, "instanceNamePrefixes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=instances" }),
        __metadata("design:type", Array)
    ], Assignment.prototype, "instances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=osTypes", elemType: AssignmentOsType }),
        __metadata("design:type", Array)
    ], Assignment.prototype, "osTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zones" }),
        __metadata("design:type", Array)
    ], Assignment.prototype, "zones", void 0);
    return Assignment;
}(SpeakeasyBase));
export { Assignment };
