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
import { AppEngineHttpRequest } from "./appenginehttprequest";
import { HttpRequest } from "./httprequest";
import { PullMessage } from "./pullmessage";
import { TaskStatus } from "./taskstatus";
export var TaskViewEnum;
(function (TaskViewEnum) {
    TaskViewEnum["ViewUnspecified"] = "VIEW_UNSPECIFIED";
    TaskViewEnum["Basic"] = "BASIC";
    TaskViewEnum["Full"] = "FULL";
})(TaskViewEnum || (TaskViewEnum = {}));
// Task
/**
 * A unit of scheduled work.
**/
var Task = /** @class */ (function (_super) {
    __extends(Task, _super);
    function Task() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appEngineHttpRequest" }),
        __metadata("design:type", AppEngineHttpRequest)
    ], Task.prototype, "appEngineHttpRequest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Task.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=httpRequest" }),
        __metadata("design:type", HttpRequest)
    ], Task.prototype, "httpRequest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Task.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pullMessage" }),
        __metadata("design:type", PullMessage)
    ], Task.prototype, "pullMessage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scheduleTime" }),
        __metadata("design:type", String)
    ], Task.prototype, "scheduleTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", TaskStatus)
    ], Task.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=view" }),
        __metadata("design:type", String)
    ], Task.prototype, "view", void 0);
    return Task;
}(SpeakeasyBase));
export { Task };
