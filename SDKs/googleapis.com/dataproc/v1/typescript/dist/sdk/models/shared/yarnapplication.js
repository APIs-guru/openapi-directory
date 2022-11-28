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
export var YarnApplicationStateEnum;
(function (YarnApplicationStateEnum) {
    YarnApplicationStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    YarnApplicationStateEnum["New"] = "NEW";
    YarnApplicationStateEnum["NewSaving"] = "NEW_SAVING";
    YarnApplicationStateEnum["Submitted"] = "SUBMITTED";
    YarnApplicationStateEnum["Accepted"] = "ACCEPTED";
    YarnApplicationStateEnum["Running"] = "RUNNING";
    YarnApplicationStateEnum["Finished"] = "FINISHED";
    YarnApplicationStateEnum["Failed"] = "FAILED";
    YarnApplicationStateEnum["Killed"] = "KILLED";
})(YarnApplicationStateEnum || (YarnApplicationStateEnum = {}));
// YarnApplication
/**
 * A YARN application created by a job. Application information is a subset of org.apache.hadoop.yarn.proto.YarnProtos.ApplicationReportProto.Beta Feature: This report is available for testing purposes only. It may be changed before final release.
**/
var YarnApplication = /** @class */ (function (_super) {
    __extends(YarnApplication, _super);
    function YarnApplication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], YarnApplication.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], YarnApplication.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], YarnApplication.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trackingUrl" }),
        __metadata("design:type", String)
    ], YarnApplication.prototype, "trackingUrl", void 0);
    return YarnApplication;
}(SpeakeasyBase));
export { YarnApplication };
