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
import { Member } from "./member";
var ActivityWithMember = /** @class */ (function (_super) {
    __extends(ActivityWithMember, _super);
    function ActivityWithMember() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=activity_type" }),
        __metadata("design:type", String)
    ], ActivityWithMember.prototype, "activityType", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ActivityWithMember.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], ActivityWithMember.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "json, name=link" }),
        __metadata("design:type", String)
    ], ActivityWithMember.prototype, "link", void 0);
    __decorate([
        Metadata({ data: "json, name=link_text" }),
        __metadata("design:type", String)
    ], ActivityWithMember.prototype, "linkText", void 0);
    __decorate([
        Metadata({ data: "json, name=member" }),
        __metadata("design:type", Member)
    ], ActivityWithMember.prototype, "member", void 0);
    __decorate([
        Metadata({ data: "json, name=occurred_at" }),
        __metadata("design:type", String)
    ], ActivityWithMember.prototype, "occurredAt", void 0);
    __decorate([
        Metadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], ActivityWithMember.prototype, "tags", void 0);
    __decorate([
        Metadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], ActivityWithMember.prototype, "title", void 0);
    __decorate([
        Metadata({ data: "json, name=weight" }),
        __metadata("design:type", String)
    ], ActivityWithMember.prototype, "weight", void 0);
    return ActivityWithMember;
}(SpeakeasyBase));
export { ActivityWithMember };
