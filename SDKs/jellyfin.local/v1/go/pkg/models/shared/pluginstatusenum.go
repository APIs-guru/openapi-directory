package shared




type PluginStatusEnum string

const (
    PluginStatusEnumActive PluginStatusEnum = "Active"
PluginStatusEnumRestart PluginStatusEnum = "Restart"
PluginStatusEnumDeleted PluginStatusEnum = "Deleted"
PluginStatusEnumSuperceded PluginStatusEnum = "Superceded"
PluginStatusEnumMalfunctioned PluginStatusEnum = "Malfunctioned"
PluginStatusEnumNotSupported PluginStatusEnum = "NotSupported"
PluginStatusEnumDisabled PluginStatusEnum = "Disabled"
)


