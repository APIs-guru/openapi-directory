package shared




type ReadWriteReadLockModeEnum string

const (
    ReadWriteReadLockModeEnumReadLockModeUnspecified ReadWriteReadLockModeEnum = "READ_LOCK_MODE_UNSPECIFIED"
ReadWriteReadLockModeEnumPessimistic ReadWriteReadLockModeEnum = "PESSIMISTIC"
ReadWriteReadLockModeEnumOptimistic ReadWriteReadLockModeEnum = "OPTIMISTIC"
)


type ReadWrite struct {
    ReadLockMode *ReadWriteReadLockModeEnum `json:"readLockMode,omitempty"`
    
}

